import { AppDispatch, RootState } from "configStore";
import { useAppDispatch, useAppSelector } from "hooks/store";
import moment from "moment";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

//slice
import {
  getCinema,
  getFilm,
  getListCinemaForm,
  getListFilmForm,
  getShowTimeWatch,
  getShowTime,
  getShowTimes,
} from "slices/getSticketSlice";

//scss
import "./FormGetSticket.scss";

import Swal from "sweetalert2";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ButtonCustom from "ui/ButtonCustom/ButtonCustom";
import Image from "ui/Image/Image";

const FormGetSticket = () => {
  const {
    film,
    listFilm,
    cinema,
    listCinema,
    showTime,
    listShowTimes,
    showTimeWatch,
  } = useAppSelector((state) => state.getSticket);

  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListFilmForm());

    if (film.idFilm) {
      dispatch(getListCinemaForm(film.idFilm));
    }
  }, [film.idFilm]);

  const renderFilm = () => {
    return (
      <Menu>
        {listFilm.map((film, index) => {
          return (
            <Menu.Item
              key={film.maPhim}
              onClick={() => {
                dispatch(
                  getFilm({ idFilm: film.maPhim, nameFilm: film.tenPhim })
                );
              }}
            >
              <Image
                style={{ borderRadius: "50px" }}
                width={50}
                height={50}
                src={film.hinhAnh}
              />
              <span className="ml-3">{film.tenPhim}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  const renderCinema = () => {
    return (
      <Menu>
        {film.nameFilm ? (
          listCinema.map((sysCinema, index) => {
            return sysCinema.cumRapChieu.map((cinema, idx) => {
              return (
                <Menu.Item
                  key={cinema.maCumRap}
                  onClick={() => {
                    dispatch(
                      getCinema({
                        idCinema: cinema.maCumRap,
                        nameCinema: cinema.tenCumRap,
                        logo: cinema.hinhAnh,
                      })
                    );
                    dispatch(getShowTimes(cinema.lichChieuPhim));
                  }}
                >
                  <Image src={sysCinema.logo} width={50} height={50} />
                  <span className="ml-3">{cinema.tenCumRap}</span>
                </Menu.Item>
              );
            });
          })
        ) : (
          <Menu.Item>Vui lòng chọn phim!</Menu.Item>
        )}
      </Menu>
    );
  };

  const renderShowTimes = () => {
    let time = "";
    return (
      <Menu>
        {!film.nameFilm || !cinema.nameCinema ? (
          film.nameFilm ? (
            <Menu.Item>Vui lòng chọn rạp!</Menu.Item>
          ) : (
            <Menu.Item>Vui lòng chọn phim và rạp!</Menu.Item>
          )
        ) : (
          listShowTimes.map((showTime, idx) => {
            if (
              time === moment(showTime.ngayChieuGioChieu).format("DD-MM-YYYY")
            ) {
              return;
            }
            time = moment(showTime.ngayChieuGioChieu).format("DD-MM-YYYY");
            return (
              <Menu.Item
                key={showTime.maLichChieu}
                onClick={() => {
                  dispatch(getShowTime(showTime.ngayChieuGioChieu));
                }}
              >
                {moment(showTime.ngayChieuGioChieu).format("DD-MM-YYYY")}
              </Menu.Item>
            );
          })
        )}
      </Menu>
    );
  };

  const renderShowHour = () => {
    return (
      <Menu>
        {!film.nameFilm || !cinema.nameCinema || !showTime ? (
          film.nameFilm ? (
            cinema.nameCinema ? (
              <Menu.Item>Vui lòng chọn ngày xem!</Menu.Item>
            ) : (
              <Menu.Item>Vui lòng chọn phim và rạp!</Menu.Item>
            )
          ) : (
            <Menu.Item>Vui lòng chọn phim, rạp và ngày xem!</Menu.Item>
          )
        ) : (
          listShowTimes.map((time, idx) => {
            if (showTime === time.ngayChieuGioChieu) {
              return (
                <Menu.Item
                  key={time.maLichChieu}
                  onClick={() => {
                    dispatch(
                      getShowTimeWatch({
                        maLichChieu: time.maLichChieu,
                        maRap: time.maRap,
                        ngayChieuGioChieu: `${moment(
                          time.ngayChieuGioChieu
                        ).format("h:mm A")} - ${time.tenRap}`,
                      })
                    );
                  }}
                >
                  {moment(time.ngayChieuGioChieu).format("h:mm A")} -{" "}
                  {time.tenRap}
                </Menu.Item>
              );
            }
          })
        )}
      </Menu>
    );
  };

  const getTicket = () => {
    if (user) {
      navigate(`/datve/${showTimeWatch.maLichChieu}`, { replace: true });
    } else {
      Swal.fire({
        icon: "warning",
        text: "Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Đồng Ý!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { replace: true });
        }
      });
    }
  };

  return (
    <section className="choose-ticket" id="formGetSticket">
      <div className="container">
        <div
          className="row choose-ticket__inner"
          style={{ alignItems: "center" }}
        >
          <div className="col-12 col-md-4 selec-film">
            <Dropdown
              overlay={renderFilm()}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="d-flex p-3 justify-content-between">
                <span>{film.idFilm ? film.nameFilm : "Phim"}</span>
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>
          <div className="col-12 col-md-2 select-cinema">
            <Dropdown
              overlay={renderCinema()}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="d-flex p-3 justify-content-between">
                <span>{cinema.idCinema ? cinema.nameCinema : "Rạp Chiếu"}</span>
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>

          <div className="col-12 col-md-2 select-date">
            <Dropdown
              overlay={renderShowTimes()}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="d-flex p-3 justify-content-between">
                {showTime !== ""
                  ? moment(showTime).format("DD-MM-YYYY")
                  : "Ngày Xem"}
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>

          <div className="col-12 col-md-2 select-movie">
            <Dropdown
              overlay={renderShowHour()}
              placement="bottomRight"
              trigger={["click"]}
            >
              <Space className="d-flex p-3 justify-content-between">
                {showTimeWatch.ngayChieuGioChieu
                  ? showTimeWatch.ngayChieuGioChieu
                  : "Suất Chiếu"}
                <DownOutlined />
              </Space>
            </Dropdown>
          </div>

          <div className="col-12 col-md-2">
            <ButtonCustom
              disabled={showTimeWatch.ngayChieuGioChieu ? false : true}
              onClick={() => getTicket()}
            >
              MUA VÉ NGAY
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormGetSticket;
