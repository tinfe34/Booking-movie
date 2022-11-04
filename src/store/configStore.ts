import { configureStore } from "@reduxjs/toolkit";
import movie from "./modules/movie";
import auth from "./modules/auth";
import location from "./modules/locationSlice";
import banner from "./modules/bannerSlice";
import cinema from "./modules/cinemaSlice";
import getSticket from "./modules/getSticketSlice";
import booking from "./modules/bookingSlice";
import loading from "./modules/loadingSlice";

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
