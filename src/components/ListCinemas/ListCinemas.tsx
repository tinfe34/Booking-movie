import { useEffect } from "react";

import moment from "moment";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

// hook
import { useAppDispatch, useAppSelector } from "hooks/store";
import { useDesktop } from "hooks/media";

//slice
import { getSystemCinemas } from "store/modules/cinemaSlice";

//ultil
import { createRandomNumber } from "../../ultis";

//antd
import { Collapse, Tabs } from "antd";

//scss
import "./ListCinemas.scss";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const ListCinemas = () => {
  const { SysCinemas } = useAppSelector((state) => state.cinema);
  const { user } = useAppSelector((state) => state.auth);
  const isDesktop = useDesktop();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSystemCinemas());
  }, []);

  const clickMovie = (maLichChieu: any) => {
    if (user) {
      window.open(`${window.location}datve/${maLichChieu}`, "_blank");
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
          navigate("/login");
        }
      });
    }
  };

  const tabChidren = (sysCinema: any) => {
    return (
      <Tabs
        tabPosition={isDesktop ? "left" : "top"}
        destroyInactiveTabPane={true}
      >
        {sysCinema.lstCumRap?.map((lstCinema: any, idx: any) => {
          return (
            <TabPane
              tab={
                <div className="info" style={{ width: "300px" }}>
                  <img className="info__logo" src={sysCinema.logo} />
                  <div className="info__wrap">
                    <div className="title">{lstCinema.tenCumRap}</div>
                    <div className="address">{lstCinema.diaChi}</div>
                    <div className="detail">[chi tiết]</div>
                  </div>
                </div>
              }
              key={idx}
            >
              {menu(lstCinema)}
            </TabPane>
          );
        })}
      </Tabs>
    );
  };

  const menu = (lstCinema: any) => {
    return (
      <Collapse>
        {lstCinema?.danhSachPhim.map((phim: any, id: any) => {
          return (
            <Panel
              header={
                <div className="movie-header">
                  <img
                    className="movie-image"
                    src={phim.hinhAnh}
                    style={{
                      objectFit: "cover",
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  />
                  <div className="movie-info">
                    <div className="name">{phim.tenPhim}</div>
                    <div className="date">
                      {createRandomNumber(120, 90)} phút -
                      {createRandomNumber(9.7, 3.4).toFixed(1)} IMDb
                    </div>
                  </div>
                </div>
              }
              key={id}
            >
              {phim.lstLichChieuTheoPhim.map((ds: any, idx: any) => {
                if (idx < 6) {
                  return (
                    <div
                      key={idx}
                      className="ticket-btn"
                      style={{ marginBottom: "10px" }}
                      onClick={() => clickMovie(ds.maLichChieu)}
                    >
                      {moment(ds.ngayChieuGioChieu).format("hh:mm A")}
                    </div>
                  );
                }
              })}
            </Panel>
          );
        })}
      </Collapse>
    );
  };

  return (
    <section className="list-cinemas mt-5" id="cumrap">
      <div className="container">
        <Tabs
          className="tab-list"
          tabPosition={isDesktop ? "left" : "top"}
          centered={isDesktop ? false : true}
          destroyInactiveTabPane={true}
        >
          {SysCinemas?.map((sysCinema, index) => {
            return (
              <TabPane
                tab={
                  <div className="tab-parent logo-cinemas">
                    <img src={sysCinema.logo} width={50} height={50} />
                  </div>
                }
                key={index}
              >
                {tabChidren(sysCinema)}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ListCinemas;
