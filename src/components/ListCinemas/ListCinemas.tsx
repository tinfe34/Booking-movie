import { Alert, Col, Collapse, Menu, MenuProps, Row, Tabs } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { AppDispatch, RootState } from "configStore";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSystemCinemas } from "slices/cinemaSlice";
import Swal from "sweetalert2";
import { USERLOGIN } from "utill/setting";

//scss
import './ListCinemas.scss'

const { TabPane } = Tabs;
const { Panel } = Collapse;

const ListCinemas = () => {
  const { SysCinemas } = useSelector((state: RootState) => state.cinema);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSystemCinemas());
  }, []);

  const createRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const formatNum = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const clickMovie = () => {
    Swal.fire({
      icon: "warning",
      text: "Bạn chưa đăng nhập! Hãy đăng nhập để tiếp tục",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng Ý!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };

  const renderListCinema = () => {
    return SysCinemas?.map((sysCinema, index) => {
      return (
        <TabPane
          tab={<img src={sysCinema.logo} width={50} height={50} />}
          key={index}
        >
          <span className="tab__info">
            <Tabs tabPosition="left">
              {sysCinema.lstCumRap?.map((lstCinema, idx) => {
                return (
                  <TabPane
                    tab={
                      <div className="info__cinema">
                        <img src={sysCinema.logo} width={50} height={50} />
                        <div className="wrapInfo">
                          <div className="infoTitle">{lstCinema.tenCumRap}</div>
                          <div className="infoAdd">{lstCinema.diaChi}</div>
                          <div className="infoDetail">[chi tiết]</div>
                        </div>
                      </div>
                    }
                    key={idx}
                  >
                    <Menu
                      style={{
                        paddingLeft: "10px",
                        width: "100%",
                      }}
                      key={idx + 100}
                      mode="inline"
                    >
                      {lstCinema.danhSachPhim?.map((phim, id) => {
                        return (
                          <SubMenu
                            key={id}
                            icon={
                              <img
                                src={phim.hinhAnh}
                                width={40}
                                height={40}
                                style={{
                                  borderRadius: "40px",
                                }}
                              />
                            }
                            title={
                              <div className="movie__listCinema">
                                <div className="typeAgeMovieCinema">
                                  C{createRandomNumber(18, 12)}
                                </div>
                                <div className="infoFilmDetail">
                                  <div className="nameMovieCinema">
                                    {phim.tenPhim}
                                  </div>
                                  <div className="infoFilmMovieCinema">
                                    {createRandomNumber(120, 90)} phút -{" "}
                                    {createRandomNumber(9.7, 3.4).toFixed(1)}{" "}
                                    IMDb
                                  </div>
                                </div>
                              </div>
                            }
                          >
                            {phim.lstLichChieuTheoPhim.map((ds, indexssss) => {
                              if (indexssss < 6) {
                                let maRap =
                                  sysCinema.maHeThongRap.toLowerCase();
                                if (localStorage.getItem(USERLOGIN)) {
                                  return (
                                    <Menu.Item
                                      key={createRandomNumber(120000, 90)}
                                    >
                                      <a
                                        target="_blank"
                                        // onClick={() => {
                                        //     dispatch({
                                        //         type: "RESET_LOADING_BOOKING",
                                        //     });
                                        // }}
                                        href={`/datve/${ds.maLichChieu}`}
                                      >
                                        <Alert
                                          message={`Giờ Chiếu: ${moment(
                                            ds.ngayChieuGioChieu
                                          ).format(
                                            "hh:mm A"
                                          )}, Giá Vé: ${formatNum(
                                            ds.giaVe
                                          )} VNĐ`}
                                          type="info"
                                          showIcon
                                        />
                                      </a>
                                    </Menu.Item>
                                  );
                                } else {
                                  return (
                                    <Menu.Item
                                      key={createRandomNumber(120000, 90)}
                                    >
                                      <a target="_blank" onClick={clickMovie}>
                                        <Alert
                                          message={`Giờ Chiếu: ${moment(
                                            ds.ngayChieuGioChieu
                                          ).format(
                                            "hh:mm A"
                                          )}, Giá Vé: ${formatNum(
                                            ds.giaVe
                                          )} VNĐ`}
                                          type="error"
                                          showIcon
                                        />
                                      </a>
                                    </Menu.Item>
                                  );
                                }
                              }
                            })}
                          </SubMenu>
                        );
                      })}
                    </Menu>
                  </TabPane>
                );
              })}
            </Tabs>
          </span>
        </TabPane>
      );
    });
  };

  const renderCinemasMobile = () => {
    return SysCinemas.map((sysCinema, index) => {
      return (
        <Collapse expandIconPosition="end" key={index}>
          <Panel
            header={
              <div className="titleCinemaMobile">
                <img className="logoCinemasMobile" src={sysCinema.logo} />
                <div className="nameCinemasMobile">
                  {sysCinema.maHeThongRap}
                </div>
              </div>
            }
            key={index}
          >
            {sysCinema.lstCumRap.map((cinema, inde) => {
              return (
                <Collapse expandIconPosition="end" key={inde}>
                  <Panel
                    header={
                      <div className="titleCinemasChildMobile">
                        <img
                          className="logoCinemasChildMobile"
                          src={sysCinema.logo}
                        />
                        <div className="infoCinemasChildMobile">
                          <div className="nameCinemasChildMobile">
                            {cinema.tenCumRap}
                          </div>
                          <div className="addCinemasChildMobile">
                            {cinema.diaChi}
                          </div>
                        </div>
                      </div>
                    }
                    key={inde}
                  >
                    {cinema.danhSachPhim.map((movie, ind) => {
                      return (
                        <Collapse expandIconPosition="end" key={ind}>
                          <Panel
                            header={
                              <div className="infoFilmCinemaMobile">
                                <img
                                  className="imgFilmMobile"
                                  src={movie.hinhAnh}
                                />
                                <div className="infoFilmMobileDetail">
                                  <span className="typeAgeMobile">
                                    C{createRandomNumber(18, 12)}
                                  </span>
                                  <span className="nameFilmCinemaMobile">
                                    {movie.tenPhim}
                                  </span>
                                  <div className="timeReviewFilmMobile">
                                    {createRandomNumber(120, 90)} phút -{" "}
                                    {createRandomNumber(9.7, 3.4).toFixed(1)}{" "}
                                    IMDb
                                  </div>
                                </div>
                              </div>
                            }
                            key={ind}
                          >
                            <div
                              className="ml-2"
                              style={{
                                fontWeight: "600",
                              }}
                            >
                              {createRandomNumber(3, 2)}D Digital
                            </div>
                            <div key={ind + 300} className="row ml-2">
                              {movie.lstLichChieuTheoPhim.map(
                                (ds, indexssss) => {
                                  if (indexssss <= 6) {
                                    let maRap =
                                      sysCinema.maHeThongRap.toLowerCase();
                                    if (localStorage.getItem(USERLOGIN)) {
                                      return (
                                        <a
                                          key={indexssss + 200}
                                          target="_blank"
                                          href={`/dat-ve/${maRap}/${ds.maLichChieu}`}
                                          className="movieTime "
                                        >
                                          <span className="mainTime">
                                            {moment(
                                              ds.ngayChieuGioChieu
                                            ).format("hh:mm ")}
                                          </span>
                                          -
                                          {moment(ds.ngayChieuGioChieu)
                                            .add(2, "hours")
                                            .format("hh:mm ")}
                                        </a>
                                      );
                                    } else {
                                      return (
                                        <a
                                          key={indexssss + 200}
                                          onClick={clickMovie}
                                          className="movieTime "
                                        >
                                          <span className="mainTime">
                                            {moment(
                                              ds.ngayChieuGioChieu
                                            ).format("hh:mm ")}
                                          </span>
                                          -
                                          {moment(ds.ngayChieuGioChieu)
                                            .add(2, "hours")
                                            .format("hh:mm ")}
                                        </a>
                                      );
                                    }
                                  }
                                }
                              )}
                            </div>
                          </Panel>
                        </Collapse>
                      );
                    })}
                  </Panel>
                </Collapse>
              );
            })}
          </Panel>
        </Collapse>
      );
    });
  };

  return (
    <div className="container movie__listCinemas" id="listCinema">
      <Row className="listCinemas hideOnMobile">
        <Col span={24}>
          <Tabs tabPosition="left">{renderListCinema()}</Tabs>
        </Col>
      </Row>
      <div className="listCinemasMobile hideOnPC">
        <div className="col-12 p-0">{renderCinemasMobile()}</div>
      </div>
      <div
        className="container back__news"
        style={{
          backgroundImage: "url('./images/icons/back-news.png')",
        }}
      ></div>
    </div>
  );
};

export default ListCinemas;
