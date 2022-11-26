import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "store/configStore";
import Swal from "sweetalert2";
import _ from "lodash";

//slices
import {
  getBookingSticket,
  getSticketAction,
} from "store/modules/bookingSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//scss
import "./BookingStickets.scss";

//antd
import { Divider, Modal } from "antd";

import Image from "ui/Image/Image";

//components
import BookingHeader from "components/BookingStickets/BookingHeader";
import BookingContent from "components/BookingStickets/BookingContent";
import BuySticketForPC from "components/BookingStickets/BuySticketForPC";

const BookingStickets = () => {
  const [isModalVisibleGetSticket, setIsModalVisibleGetSticket] =
    useState(false);

  const { maLichChieu } = useParams();

  const { bookingSticket, listSeatBooked } = useAppSelector(
    (state) => state.booking
  );
  const { user } = useAppSelector((state) => state.auth);
  const { logo } = useAppSelector((state) => state.cinema);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookingSticket(+maLichChieu!));
  }, []);

  const total = useMemo(() => {
    return listSeatBooked
      .reduce((tongTien, seat) => {
        return (tongTien += seat.giaVe);
      }, 0)
      .toLocaleString();
  }, [listSeatBooked]);

  const handleOkGetSticket = () => {
    setIsModalVisibleGetSticket(false);

    if (!listSeatBooked.length) {
      Swal.fire({
        title: "Bạn Chưa Chọn Ghế!",
        text: "Vui Lòng Chọn Ghế Trước Khi Đặt!",
        icon: "warning",
        confirmButtonColor: "#fb4226",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Bạn có chắc muốn đặt vé không!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#fb4226",
        cancelButtonColor: "rgb(167 167 167)",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          let objectApi = {
            maLichChieu: maLichChieu,
            danhSachVe: listSeatBooked,
            taiKhoanNguoiDung: user?.taiKhoan,
          };
          dispatch(getSticketAction(objectApi));
        }
      });
    }
  };

  return (
    <div className="booking-sticket">
      <div className="row g-0">
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
          <BookingHeader />
          <Divider />
          <BookingContent openModal={() => setIsModalVisibleGetSticket(true)} />
        </div>
        <div className="col-3 d-none d-lg-block">
          <BuySticketForPC total={total} />
        </div>
      </div>
      <Modal
        className="sticket-modal"
        title={
          <div className="modal-title">
            <Image src={logo} width={70} height={70} />
            <span className="modal-info">THÔNG TIN VÉ</span>
          </div>
        }
        visible={isModalVisibleGetSticket}
        okText="ĐẶT VÉ"
        onOk={handleOkGetSticket}
        onCancel={() => setIsModalVisibleGetSticket(false)}
      >
        <div className="get-sticket-mobile">
          <div className="total">{`${total} VNĐ`}</div>
          <div className="film-info">
            <div className="name">
              <span className="type">C12</span>
              {bookingSticket?.thongTinPhim?.tenPhim}
            </div>
            <img src={bookingSticket?.thongTinPhim?.hinhAnh} />
          </div>
          <div className="seat-bookings">
            <div className="title ">
              Ghế:
              {listSeatBooked.map((seat, index) => {
                return (
                  <span className="seat-name-booking" key={`seatBd-${index}`}>
                    {seat.stt},
                  </span>
                );
              })}
            </div>
            <div className="total-money ">{`${total} VNĐ`}</div>
          </div>
          <div className="info-film ">
            <div className="title">Ngày Giờ Chiếu:</div>
            <div className="content">
              {bookingSticket?.thongTinPhim?.ngayChieu}-
              {bookingSticket?.thongTinPhim?.gioChieu}
            </div>
          </div>
          <div className="info-film">
            <div className="title">Cụm Rạp:</div>
            <div className="content">
              {bookingSticket?.thongTinPhim?.tenCumRap}
            </div>
          </div>
          <div className="info-film">
            <div className="title">Tên Rạp:</div>
            <div className="content">
              {bookingSticket?.thongTinPhim?.tenRap}
            </div>
          </div>
          <div className="info-user">
            <div className="title">Họ Tên Khách Hàng:</div>
            <div className="content">{user?.hoTen}</div>
          </div>
          <div className="info-user">
            <div className="title">Email:</div>
            <div className="content">{user?.email}</div>
          </div>
          <div className="info-user">
            <div className="title">Số Điện Thoại:</div>
            <div className="content">{user?.soDT}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BookingStickets;
