import moment from "moment";

//slice
import { getShowTimeWatch } from "store/modules/getSticketSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

//interface
import { lcFilm } from "interface/cinema";

export interface ISelectShowTime {}

export default function SelectShowTime(props: ISelectShowTime) {
  const { film, cinema, showTime, listShowTimes, showTimeWatch } =
    useAppSelector((state) => state.getSticket);

  const dispatch = useAppDispatch();

  const onSelectShowTime = (time: lcFilm) => {
    dispatch(
      getShowTimeWatch({
        maLichChieu: time.maLichChieu,
        maRap: time.maRap,
        ngayChieuGioChieu: `${moment(time.ngayChieuGioChieu).format(
          "h:mm A"
        )} - ${time.tenRap}`,
      })
    );
  };
  const renderMenu = () => {
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
          listShowTimes.map((time) => {
            if (showTime === time.ngayChieuGioChieu) {
              return (
                <Menu.Item
                  key={time.maLichChieu}
                  onClick={() => onSelectShowTime(time)}
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

  return (
    <Dropdown
      overlay={renderMenu()}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Space className="d-flex p-3 justify-content-between">
        {showTimeWatch?.ngayChieuGioChieu
          ? showTimeWatch?.ngayChieuGioChieu
          : "Suất Chiếu"}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
