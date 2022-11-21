
import { Fragment } from "react";
import { RootState } from "store/configStore";
import _ from "lodash";

//slices
import {
  bookTicket,
} from "store/modules/bookingSlice";

//img
import screen from "./../../assets/images/screen.png";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";


import Image from "ui/Image/Image";


const BookingContent = ({openModal} : any) => {

  const { bookingSticket, listSeatBooked } = useAppSelector(
    (state) => state.booking
  );
  const { logo } = useAppSelector((state: RootState) => state.cinema);

  const dispatch = useAppDispatch();

  const renderSeats = () => {
    return bookingSticket?.danhSachGhe.map((seat, index) => {
      const classes = ["seat"];

      if (seat.daDat) {
        classes.push("seat-booked");
      }

      if (seat.loaiGhe === "Vip") {
        classes.push("seat-vip");
      }

      if (seat.loaiGhe === "Vip" && seat.daDat) {
        classes.push("seat-vip-booked");
      }

      if (
        listSeatBooked.some((seatBooked) => seat.maGhe === seatBooked.maGhe)
      ) {
        classes.push("seat-booking");
      }

      return (
        <Fragment key={`${seat.maGhe}`}>
          <button
            onClick={() => {
              dispatch(bookTicket(seat));
            }}
            disabled={seat.daDat}
            className={classes.join(" ")}
          >
            {seat.stt}
          </button>
          {(index + 1) % 16 === 0 && <br />}
        </Fragment>
      );
    });
  };

  return (
    <div className="booking-content">
    <div className="booking-info my-3">
      <div className="info-cinema d-flex">
        <Image src={logo} width={50} />
        <div className="mx-3">
          <h4 className="cinema-name">
            {bookingSticket?.thongTinPhim.tenCumRap}
          </h4>
          <div className="cinema-time">
            {bookingSticket?.thongTinPhim.diaChi}
          </div>
        </div>
      </div>
      <div className="time-coundown">
        <div className="time-coundown__title">Thời Gian Giữ Ghế</div>
        <h1 className="time-coundown__time">05:00</h1>
      </div>
    </div>
    <div className="booking-screen">
      <Image src={screen} width={"100%"} />
    </div>
    <div
      className="booking-seats"
      style={{
        height: "auto",
        width: "auto",
        overflowX: "scroll",
      }}
    >
      <div
        style={{
          minWidth: "580px",
          margin: "auto",
          textAlign: 'center'
        }}
      >
        {renderSeats()}
      </div>
    </div>
    <div className="type-seat">
      <div className="row justify-content-center">
        <div className="mb-3 col-4 col-sm-4 col-md-4 col-lg-2">
          <div
            className="color"
            style={{
              backgroundColor: "#222260",
            }}
          ></div>
          <div className="note">Ghế Thường</div>
        </div>
        <div className="mb-3 col-4 col-sm-4 col-md-4 col-lg-2">
          <div
            className="color"
            style={{
              backgroundColor: "#f7b500",
            }}
          ></div>
          <div className="note">Ghế VIP</div>
        </div>
        <div className="mb-3 col-4 col-sm-4 col-md-4 col-lg-2">
          <div
            className="color"
            style={{
              backgroundColor: "#1e7e34",
            }}
          ></div>
          <div className="note">Ghế Đang Chọn</div>
        </div>
        <div className="mb-3 col-4 col-sm-4 col-md-4 col-lg-2">
          <div
            className="color"
            style={{
              backgroundColor: "#ccc",
            }}
          ></div>
          <div className="note">Ghế Thường Đã Bán</div>
        </div>
        <div className="mb-3 col-4 col-sm-4 col-md-4 col-lg-2">
          <div
            className="color"
            style={{
              backgroundColor: "#ef533b",
            }}
          ></div>
          <div className="note">Ghế VIP Đã Bán</div>
        </div>
      </div>
    </div>
    <button
      onClick={() => openModal()}
      className="btn-continue"
    >
      TIẾP TỤC
    </button>
  </div>
  )
}

export default BookingContent