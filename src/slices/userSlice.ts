import { createSlice } from "@reduxjs/toolkit";
import { User, UserLogin } from "interface/user";
import { USERLOGIN } from "utill/setting";

let userLogin = "";

if (localStorage.getItem(USERLOGIN)) {
    let usLogin: UserLogin = JSON.parse(localStorage.getItem(USERLOGIN) as string);

    userLogin = usLogin.taiKhoan;
}

const initialState: User = {
    isLoading: true,
    infoBookedUser: [],
    listMovieShedule: [],
    userAction: "",
    listUser: [],
    userName: userLogin,
    userType: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.userName = payload.userName;
            state.userType = payload.userType;
        },
    },
});

// action
export const { login } = userSlice.actions;

// reducer
export default userSlice.reducer;
