import { Dropdown, Menu, Modal, Tabs } from "antd";
import { AppDispatch, RootState } from "configStore";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate, useParams } from "react-router-dom";
import {
  bookTicket,
  changeTab,
  getBookingSticket,
  getInfoBooked,
  getSticketAction,
} from "slices/bookingSlice";
import { STICKETINFO, TOKEN, TYPE_USER, USERLOGIN } from "ultis/setting";

import {
  OrderedListOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import logoCGV from "./../../assets/images/logo.png";
import screen from "./../../assets/images/screen.png";
import ListBooked from "./ListBooked/ListBooked";
import Swal from "sweetalert2";

import { userLogout } from "slices/auth";
import _ from "lodash";
import { hideLoading, showLoading } from "slices/loadingSlice";
//scss
import "./BookingStickets.scss";
const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const BookingStickets = () => {
  const { maLichChieu } = useParams();

  const { bookingSticket, listSeatBooked, isLoading, tabActive } = useSelector(
    (state: RootState) => state.booking
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const { logo } = useSelector((state: RootState) => state.cinema);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    dispatch(getBookingSticket(+maLichChieu!));
  }, []);

  console.log(listSeatBooked);

  // for modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleGetSticket, setIsModalVisibleGetSticket] =
    useState(false);

  const handleOkGetSticket = () => {
    setIsModalVisibleGetSticket(false);
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
  const handleCancelGetSticket = () => {
    setIsModalVisibleGetSticket(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    window.location.reload();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    navigate("/", { replace: true });
  };

  const handleMenuClick = () => {
    // localStorage.removeItem(USERLOGIN);
    // localStorage.removeItem(TOKEN);
    // localStorage.removeItem(STICKETINFO);
    // localStorage.removeItem(TYPE_USER);
    dispatch(userLogout(null));
    navigate("/");
  };

  const renderSeats = () => {
    return bookingSticket?.danhSachGhe.map((seat, index) => {
      let classSeatBooked = seat.daDat ? "seatBooked" : "";
      let classSeatVIP = seat.loaiGhe === "Vip" ? "seatVIP" : "";
      let classSeatVIPBooked =
        seat.loaiGhe === "Vip" && seat.daDat ? "seatVIPBooked" : "";
      let classSeatBooking = "";

      let indexSeatBooked = listSeatBooked.findIndex(
        (seatBooked) => seat.maGhe === seatBooked.maGhe
      );
      if (indexSeatBooked != -1) {
        classSeatBooking = "seatBooking";
      }

      return (
        <Fragment key={`seatR-${seat.maGhe}`}>
          <button
            onClick={() => {
              dispatch(bookTicket(seat));
            }}
            disabled={seat.daDat}
            className={`text-center seat ${classSeatVIP}  ${classSeatBooked} ${classSeatBooking} ${classSeatVIPBooked}`}
          >
            {seat.stt}
          </button>
          {(index + 1) % 16 === 0 ? (
            <span
              style={{
                marginRight: "20px",
                width: "20px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              <br />
            </span>
          ) : (
            ""
          )}
        </Fragment>
      );
    });
  };

  const menu = (
    <Menu>
      <Menu.Item icon={<OrderedListOutlined />}>Danh sách vé</Menu.Item>
      <Menu.Item onClick={handleMenuClick} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  if (localStorage.getItem(USERLOGIN)) {
    if (isLoading) {
      // return <Loading />;
      dispatch(showLoading());
      return <div></div>;
    } else {
      dispatch(hideLoading());
      return (
        <div>
          <Tabs defaultActiveKey="1" activeKey={tabActive} onChange={onChange}>
            <TabPane
              tab={
                <NavLink to="/">
                  <img className="bookingNavLogo" src={logoCGV} />
                </NavLink>
              }
            ></TabPane>
            <TabPane
              tab={
                <div
                  onClick={() => {
                    dispatch(changeTab("1"));
                  }}
                >
                  01 Chọn Ghế Và Thanh Toán
                </div>
              }
              key="1"
            >
              <div className="bookingSticket">
                <div className="row" style={{ margin: "0", height: "100%" }}>
                  <div
                    className="col-12 col-sm-12 col-md-12 col-lg-9"
                    style={{ height: "100%", padding: "0" }}
                  >
                    <div className="bookingNav">
                      <div>
                        <div className="tab-content" id="bookingTab">
                          <div
                            className="tab-pane fade show active"
                            id="choose"
                            role="tabpanel"
                            aria-labelledby="choose-tab"
                          >
                            <div className="row bookingTitle">
                              <div className="bookingInfo">
                                <div className="infoCinema">
                                  <img src={logo} />
                                  <div className="infoCinemaDetail">
                                    <div className="nameCinema">
                                      {bookingSticket?.thongTinPhim.tenCumRap}
                                    </div>
                                    <div className="cinemaTime">
                                      {bookingSticket?.thongTinPhim.diaChi}
                                    </div>
                                  </div>
                                  <div className="timeCountDown">
                                    <div className="timeTitle">
                                      Thời Gian Giữ Ghế
                                    </div>
                                    <div className="timeDown">
                                      {minutes === 0 && seconds === 0 ? (
                                        <h1> 00:00</h1>
                                      ) : (
                                        <h1>
                                          {" "}
                                          0{minutes}:
                                          {seconds < 10
                                            ? `0${seconds}`
                                            : seconds}
                                        </h1>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="screenBooking">
                              <img src={screen} />
                            </div>
                            <div
                              style={{
                                height: "auto",
                                width: "auto",
                                overflowX: "scroll",
                              }}
                            >
                              <div
                                className="bookingSeat"
                                style={{
                                  textAlign: "center",
                                  width: "750px",
                                  margin: "auto",
                                }}
                              >
                                {renderSeats()}
                              </div>
                            </div>
                            <div className="typeSeat row">
                              <div className="typeSeatItem col-4 col-sm-4 col-md-4 col-lg-2">
                                <div
                                  className="colorSeat "
                                  style={{
                                    backgroundColor: "#3e515d ",
                                  }}
                                ></div>
                                <div className="seatNote">Ghế Thường</div>
                              </div>
                              <div className="typeSeatItem col-4 col-sm-4 col-md-4 col-lg-2">
                                <div
                                  className="colorSeat"
                                  style={{
                                    backgroundColor: "#f7b500",
                                  }}
                                ></div>
                                <div className="seatNote">Ghế VIP</div>
                              </div>
                              <div className="typeSeatItem col-4 col-sm-4 col-md-4 col-lg-2">
                                <div
                                  className="colorSeat"
                                  style={{
                                    backgroundColor: "greenyellow",
                                  }}
                                ></div>
                                <div className="seatNote">Ghế Đang Chọn</div>
                              </div>
                              <div className="typeSeatItem col-4 col-sm-4 col-md-4 col-lg-2">
                                <div
                                  className="colorSeat"
                                  style={{
                                    backgroundColor: "#ccc",
                                  }}
                                ></div>
                                <div className="seatNote">
                                  Ghế Thường Đã Bán
                                </div>
                              </div>
                              <div className="typeSeatItem col-4 col-sm-4 col-md-4 col-lg-2">
                                <div
                                  className="colorSeat"
                                  style={{
                                    backgroundColor: "#ef533b",
                                  }}
                                ></div>
                                <div className="seatNote">Ghế VIP Đã Bán</div>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setIsModalVisibleGetSticket(true);
                              }}
                              className="buttonContinue"
                            >
                              TIẾP TỤC
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 buySticket hideOnMobile">
                    <div className="total">
                      {listSeatBooked
                        .reduce((tongTien, seat, index) => {
                          return (tongTien += seat.giaVe);
                        }, 0)
                        .toLocaleString()}
                      VNĐ
                    </div>
                    <div className="filmInfo">
                      <div className="nameFilm">
                        <span className="typeFilm">C12</span>
                        {bookingSticket?.thongTinPhim?.tenPhim}
                      </div>
                      <img
                        className="imgFilm"
                        src={bookingSticket?.thongTinPhim?.hinhAnh}
                      />
                    </div>
                    <div className="seatBookings">
                      <div className="title ">
                        Ghế:{" "}
                        {_.sortBy(listSeatBooked).map((seat, index) => {
                          return (
                            <span
                              className="seatNameBooking"
                              key={`seatB-${index}`}
                            >
                              {seat.stt},
                            </span>
                          );
                        })}
                      </div>
                      <div className="totalMoney ">
                        {listSeatBooked
                          .reduce((tongTien, seat, index) => {
                            return (tongTien += seat.giaVe);
                          }, 0)
                          .toLocaleString()}
                        VNĐ
                      </div>
                    </div>
                    <div className="infoBookingFilm ">
                      <div className="title">Ngày Giờ Chiếu:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.ngayChieu}-
                        {bookingSticket?.thongTinPhim?.gioChieu}
                      </div>
                    </div>
                    <div className="infoBookingFilm">
                      <div className="title">Cụm Rạp:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.tenCumRap}
                      </div>
                    </div>
                    <div className="infoBookingFilm">
                      <div className="title">Tên Rạp:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.tenRap}
                      </div>
                    </div>
                    <div className="infoUser">
                      <div className="title">Họ Tên Khách Hàng:</div>
                      <div className="content">{user?.hoTen}</div>
                    </div>
                    <div className="infoUser">
                      <div className="title">Email:</div>
                      <div className="content">{user?.email}</div>
                    </div>
                    <div className="infoUser">
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
                      className="btnGetSticket"
                    >
                      ĐẶT VÉ
                    </button>
                  </div>
                </div>
                <Modal
                  className="getSticketModal"
                  title={
                    <div className="modalTitle">
                      <img className="modalImg" src={logo} />
                      <span className="modalInform">THÔNG TIN VÉ</span>
                    </div>
                  }
                  visible={isModalVisibleGetSticket}
                  okText="ĐẶT VÉ"
                  onOk={handleOkGetSticket}
                  onCancel={handleCancelGetSticket}
                >
                  <div className="getSticketMobileInfo">
                    <div className="total">
                      {listSeatBooked
                        .reduce((tongTien, seat, index) => {
                          return (tongTien += seat.giaVe);
                        }, 0)
                        .toLocaleString()}
                      VNĐ
                    </div>
                    <div className="filmInfo">
                      <div className="nameFilm">
                        <span className="typeFilm">C12</span>
                        {bookingSticket?.thongTinPhim?.tenPhim}
                      </div>
                      <img
                        className="imgFilm"
                        src={bookingSticket?.thongTinPhim?.hinhAnh}
                      />
                    </div>
                    <div className="seatBookings">
                      <div className="title ">
                        Ghế:{" "}
                        {listSeatBooked.map((seat, index) => {
                          return (
                            <span
                              className="seatNameBooking"
                              key={`seatBd-${index}`}
                            >
                              {seat.stt},
                            </span>
                          );
                        })}
                      </div>
                      <div className="totalMoney ">
                        {listSeatBooked
                          .reduce((tongTien, seat, index) => {
                            return (tongTien += seat.giaVe);
                          }, 0)
                          .toLocaleString()}
                        VNĐ
                      </div>
                    </div>
                    <div className="infoBookingFilm ">
                      <div className="title">Ngày Giờ Chiếu:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.ngayChieu}-
                        {bookingSticket?.thongTinPhim?.gioChieu}
                      </div>
                    </div>
                    <div className="infoBookingFilm">
                      <div className="title">Cụm Rạp:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.tenCumRap}
                      </div>
                    </div>
                    <div className="infoBookingFilm">
                      <div className="title">Tên Rạp:</div>
                      <div className="content">
                        {bookingSticket?.thongTinPhim?.tenRap}
                      </div>
                    </div>
                    <div className="infoUser">
                      <div className="title">Họ Tên Khách Hàng:</div>
                      <div className="content">{user?.hoTen}</div>
                    </div>
                    <div className="infoUser">
                      <div className="title">Email:</div>
                      <div className="content">{user?.email}</div>
                    </div>
                    <div className="infoUser">
                      <div className="title">Số Điện Thoại:</div>
                      <div className="content">{user?.soDT}</div>
                    </div>
                  </div>
                </Modal>
              </div>
            </TabPane>
            <TabPane
              tab={
                <div
                  onClick={() => {
                    dispatch(changeTab("2"));
                  }}
                >
                  02 Kết Quả Đặt Vé
                </div>
              }
              key="2"
            >
              <ListBooked />

              <div className="text-center px-3 py-5">
                <NavLink
                  to="/"
                  className="btn btn-success"
                  style={{ fontSize: "18px" }}
                >
                  Về trang chủ
                </NavLink>
              </div>
            </TabPane>
            <TabPane
              tab={
                <div className="user hideOnMobile">
                  <Dropdown.Button
                    className="user"
                    overlay={menu}
                    placement="bottom"
                    icon={<UserOutlined />}
                  >
                    {user?.hoTen}
                  </Dropdown.Button>
                </div>
              }
            ></TabPane>
          </Tabs>
        </div>
      );
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default BookingStickets;
