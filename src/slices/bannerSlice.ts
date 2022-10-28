import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Banner } from "interface/banner";
import bannerAPI from "services/bannerAPI";

interface State {
  banners: Banner[];
  isLoading: boolean;
  error?: string;
}

// state
const initialState: State = {
  banners: [],
  isLoading: false,
  error: undefined,
};

// thunk
export const getBanner = createAsyncThunk("banner/getBanner", async () => {
  try {
    const banners = await bannerAPI.getBanner();
    return banners;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBanner.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBanner.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.banners = payload;
    });
    builder.addCase(getBanner.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default bannerSlice.reducer;
