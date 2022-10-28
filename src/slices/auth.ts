import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginValues, RegisterValues } from "interface/login";
import { UserLogin } from "interface/user";
import authAPI from "services/authAPI";
import Swal from "sweetalert2";

interface State {
  user: UserLogin | null;
  isLoading: boolean;
  error?: string;
}

// state
const initialState: State = {
  user: JSON.parse(localStorage.getItem("userLogin") as string) || null,
  isLoading: false,
  error: undefined,
};

// thunk
export const getLogin = createAsyncThunk(
  "auth/getLogin",
  async (userLogin: LoginValues) => {
    try {
      const data = await authAPI.login(userLogin);

      if (data.taiKhoan) {
        localStorage.setItem("userLogin", JSON.stringify(data));
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("typeUser", JSON.stringify(data.maLoaiNguoiDung));
        return data;
      } else {
        Swal.fire({
          icon: "error",
          title: "Tài khoản hoặc mật khẩu không đúng",
        });
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userRegister: RegisterValues, action) => {
    try {
      const results = await authAPI.register(userRegister);

      return results;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, { payload }) => {
      state.user = payload;

      //clear localStorage
      localStorage.removeItem("userLogin");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("typeUser");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLogin.fulfilled, (state, { payload }) => {
      if (payload) {
        state.user = payload;
      }
    });
    builder.addCase(getLogin.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

export const { userLogout } = authSlice.actions;

export default authSlice.reducer;
