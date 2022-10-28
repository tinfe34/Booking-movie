import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { number } from "yup";
import { Movie } from "../interface/movie";
import movieAPI from "../services/movieAPI";

interface State {
  movies: Movie[];
  totalPages: number;
  isLoading: boolean;
  error?: string;
  filmDetail: Movie | null;
}

const initialState: State = {
  movies: [],
  totalPages: 1,
  isLoading: false,
  error: undefined,
  filmDetail: null,
};

export const getMovieShowing = createAsyncThunk(
  "movie/getMovieShowing",
  async (currentPage: number) => {
    try {
      const dataMovies = await movieAPI.getMovieShowing(currentPage);
      return dataMovies;
    } catch (error) {
      throw error;
    }
  }
);

export const getMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",
  async (maPhim: string) => {
    try {
      const movieDetail = await movieAPI.getMovieDetail(maPhim);
      return movieDetail;
    } catch (error) {
      throw error;
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovieShowing.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieShowing.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload.items;
      state.totalPages = payload.totalPages;
    });
    builder.addCase(getMovieShowing.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getMovieDetail.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovieDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.filmDetail = payload;
    });
    builder.addCase(getMovieDetail.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
  },
});

export default movieSlice.reducer;
