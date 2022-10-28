import { configureStore } from "@reduxjs/toolkit";
import movie from "./slices/movie";
import auth from "./slices/auth";
import location from "./slices/locationSlice";
import banner from "./slices/bannerSlice";
import cinema from "./slices/cinemaSlice";
import getSticket from "./slices/getSticketSlice";
import booking from "./slices/bookingSlice";
import loading from "./slices/loadingSlice";

const store = configureStore({
  reducer: {
    movie,
    location,
    banner,
    cinema,
    getSticket,
    auth,
    booking,
    loading,
  },
});

// dispatch
export type AppDispatch = typeof store.dispatch;

// state
export type RootState = ReturnType<typeof store.getState>;

export default store;
