import { createSlice } from "@reduxjs/toolkit";

export interface State {
    isLoading: boolean;
}

const initialState: State = {
    isLoading: false,
};

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
            console.log(1233);
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const { showLoading, hideLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
