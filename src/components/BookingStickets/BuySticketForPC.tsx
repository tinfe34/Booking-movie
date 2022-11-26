import { useParams } from "react-router-dom";
import { RootState } from "store/configStore";
import Swal from "sweetalert2";
import _ from "lodash";

//slices
import { getSticketAction } from "store/modules/bookingSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

type BuySticketForPCProps = {
  total: string;
};

const BuySticketForPC = ({ total }: BuySticketForPCProps) => {
  const { maLichChieu } = useParams();

  const { bookingSticket, listSeatBooked } = useAppSelector(
    (state) => state.booking
  );

  const { user } = useAppSelector((state: RootState) => state.auth);

  const dispatch = useAppDispatch();

  return (
    <div className="buy-sticket">
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
          {_.sortBy(listSeatBooked).map((seat, index) => {
            return (
              <span className="seat-name-booking" key={`seatB-${index}`}>
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
        <div className="content">{bookingSticket?.thongTinPhim?.tenCumRap}</div>
      </div>
      <div className="info-film">
        <div className="title">Tên Rạp:</div>
        <div className="content">{bookingSticket?.thongTinPhim?.tenRap}</div>
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
      <button
        onClick={() => {
          if (listSeatBooked.length == 0) {
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
            }).then(async (result) => {
              if (result.isConfirmed) {
                let objectApi = {
                  maLichChieu: maLichChieu,
                  danhSachVe: listSeatBooked,
                  taiKhoanNguoiDung: user?.taiKhoan,
                };
                await dispatch(getSticketAction(objectApi));
              }
            });
          }
        }}
        className="btn-sticket"
      >
        ĐẶT VÉ
      </button>
    </div>
  );
};

export default BuySticketForPC;
