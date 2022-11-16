import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";

//slice
import {
  getCinema,
  getFilm,
  getListCinemaForm,
  getListFilmForm,
  getShowTimeWatch,
  getShowTime,
  getShowTimes,
} from "store/modules/getSticketSlice";

//scss
import "./FormGetSticket.scss";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

//ui
import ButtonCustom from "ui/ButtonCustom/ButtonCustom";

//components
import SelectFilm from "./SelectFilm/SelectFilm";
import SelectCinema from "./SelectCinema/SelectCinema";
import SelectDate from "./SelectDate/SelectDate";
import SelectShowTime from "./SelectShowTime/SelectShowTime";

const FormGetSticket = () => {
  const {
    film,
    listFilm,
    showTimeWatch,
  } = useAppSelector((state) => state.getSticket);

  const { user: isLoggedIn } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListFilmForm());

    if (film.idFilm) {
      dispatch(getListCinemaForm(film.idFilm));
    }
  }, [film.idFilm]);

  const getTicket = () => {
    if (isLoggedIn) {
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
          <div className="col-12 col-md-4 select-film">
            <SelectFilm listFilm={ listFilm } />
          </div>
          <div className="col-12 col-md-2 select-cinema">
            <SelectCinema />
          </div>

          <div className="col-12 col-md-2 select-date">
            <SelectDate />
          </div>

          <div className="col-12 col-md-2 select-showtime">
            <SelectShowTime />
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
