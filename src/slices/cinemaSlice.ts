import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SysCinema } from "interface/movie";
import cinemaAPI from "services/cinemaAPI";

interface State {
    SysCinemas: SysCinema[];
    logo: string;
    isLoading: boolean;
    error?: string;
}

const initialState: State = {
    SysCinemas: [],
    logo: "",
    isLoading: false,
    error: undefined,
};

export const getSystemCinemas = createAsyncThunk("cinema/getSystemCinemas", async () => {
    try {
        const SysCinemas = await cinemaAPI.getSystemCinemas();
        return SysCinemas;
    } catch (error) {
        console.log(error);
        throw error;
    }
});

const cinemaSlice = createSlice({
    name: "cinema",
    initialState,
    reducers: {
        setCurrentLogoCinema: (state, { payload }) => {
            state.logo = payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(getSystemCinemas.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getSystemCinemas.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.SysCinemas = payload;
        });
        builder.addCase(getSystemCinemas.rejected, (state, { error }) => {
            state.isLoading = false;
            state.error = error.message;
        });
    },
});

// action
export const { setCurrentLogoCinema } = cinemaSlice.actions;

export default cinemaSlice.reducer;
