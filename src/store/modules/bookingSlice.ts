import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Booking, Seat } from "interface/booking";
import authAPI from "services/authAPI";
import bookingAPI from "services/bookingAPI";
import Swal from "sweetalert2";
interface State {
  bookingSticket: Booking | null;
  listSeatBooked: Seat[];
  isLoading: boolean;
  error?: string;

  tabActive: string;

  infoBooked: any;
}

const initialState: State = {
  bookingSticket: null,
  listSeatBooked: [],
  isLoading: false,
  error: undefined,

  tabActive: "1",

  infoBooked: null,
};

export const getBookingSticket = createAsyncThunk(
  "booking/getBookingSticket",
  async (MaLichChieu: number) => {
    try {      
      const bookingSticket = await bookingAPI.getBookingSticket(MaLichChieu);
      return bookingSticket;
    } catch (error) {
      throw error;
    }
  }
);

export const getSticketAction = createAsyncThunk(
  "booking/getSticketAction",
  async (data: any, { dispatch }) => {
    try {
      const result = await bookingAPI.getSticketAction(data);

      await dispatch(getBookingSticket(data.maLichChieu));

      await dispatch(removeListSeatBooked());

      dispatch(changeTab("2"));

      return result;
    } catch (error) {
      throw error;
    }
  }
);

export const getInfoBooked = createAsyncThunk(
  "auth/getInfoBooked",
  async () => {
    try {
      const infoBooked = await authAPI.getInfoBooked();
      console.log(infoBooked);
      return infoBooked;
    } catch (error) {}
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    bookTicket: (state, { payload }) => {
      let idx = state.listSeatBooked.findIndex(
        (seatBooked) => seatBooked.maGhe === payload?.maGhe
      );
      if (idx != -1) {
        state.listSeatBooked = state.listSeatBooked.filter(
          (seat) => seat.maGhe !== payload?.maGhe
        );
      } else {
        state.listSeatBooked.push(payload);
      }
    },
    removeListSeatBooked: (state) => {
      state.listSeatBooked = [];
    },
    changeTab: (state, { payload }) => {
      state.tabActive = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getBookingSticket.pending, (state, dispatch) => {
      state.isLoading = true;
    });
    builder.addCase(getBookingSticket.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bookingSticket = payload;
    });
    builder.addCase(getBookingSticket.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });
    builder.addCase(getSticketAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSticketAction.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      Swal.fire({
        title: "Thành Công",
        text: "Đặt vé thành công! Kiểm tra vé trong email!",
        icon: "success",
        confirmButtonColor: "#44c020",
      });
    });
    builder.addCase(getSticketAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
      Swal.fire({
        title: "Đặt Vé Thất Bại!",
        text: error.message,
        icon: "error",
      });
    });
    builder.addCase(getInfoBooked.pending, (state) => {});
    builder.addCase(getInfoBooked.fulfilled, (state, { payload }) => {
      state.infoBooked = payload;
    });
    builder.addCase(getInfoBooked.rejected, (state, { error }) => {
      state.error = error.message;
    });
  },
});

// action
export const { bookTicket, removeListSeatBooked, changeTab } =
  bookingSlice.actions;

export default bookingSlice.reducer;
