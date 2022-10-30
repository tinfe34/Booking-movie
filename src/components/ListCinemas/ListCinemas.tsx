import React, { useEffect } from "react";

import moment from "moment";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";

// hook
import { useAppDispatch, useAppSelector } from "hooks/store";

//slice
import { getSystemCinemas } from "slices/cinemaSlice";

//ultil
import { formatNum, createRandomNumber } from "../../ultis";
import { USERLOGIN } from "ultis/setting";

//antd
import { Alert, Collapse, Menu, MenuProps, Row, Tabs } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

//scss
import "./ListCinemas.scss";
import { useDesktop, useTablet } from "hooks/media";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const ListCinemas = () => {
  const { SysCinemas } = useAppSelector((state) => state.cinema);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isDesktop = useDesktop();
  
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
      <Tabs tabPosition={isDesktop ?  'left' : 'top' } destroyInactiveTabPane={true}>
        {sysCinema.lstCumRap?.map((lstCinema: any, idx: any) => {
          return (
            <TabPane
              tab={
                <div className="info" style={{ width: "300px" }}>
                  <img
                    className="info__logo"
                    src={sysCinema.logo}
                  />
                  <div className="info__wrap">
                    <div className="title">{lstCinema.tenCumRap}</div>
                    <div className="address">{lstCinema.diaChi}</div>
                    <div className="detail">[chi tiết]</div>
                  </div>
                </div>
              }
              key={idx}
            >
              {menu(lstCinema, sysCinema, idx)}
            </TabPane>
          );
        })}
      </Tabs>
    );
  };

  const menu = (lstCinema: any, sysCinema: any, idx: any) => {
    return (
      <Collapse>
        {lstCinema.danhSachPhim?.map((phim: any, id: any) => {
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
              {phim.lstLichChieuTheoPhim.map((ds: any, indexssss: any) => {
                if (indexssss < 6) {
                  return (
                    <div
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
    <section className="movie__listCinemas my-5" id="listCinema">
      <div className="container">
        <Tabs
          className="tab-list"
          tabPosition= {isDesktop ?  'left' : 'top'}
          centered ={isDesktop ? false : true}
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
