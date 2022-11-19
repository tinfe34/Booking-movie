import moment from "moment";

//slice
import { getShowTime } from "store/modules/getSticketSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export interface ISelectDate {}

export default function SelectDate(props: ISelectDate) {
  const { selectFilm, selectCinema, selectTime, listShowTimes } = useAppSelector(
    (state) => state.getSticket
  );

  const dispatch = useAppDispatch();

  const onSelectDate = (ngayChieuGioChieu: string) => {
    dispatch(getShowTime(ngayChieuGioChieu));
  }

  const renderMenu = () => {
    return (
      <Menu>
        {!selectFilm.nameFilm || !selectCinema.nameCinema ? (
          selectFilm.nameFilm ? (
            <Menu.Item>Vui lòng chọn rạp!</Menu.Item>
          ) : (
            <Menu.Item>Vui lòng chọn phim và rạp!</Menu.Item>
          )
        ) : (
          listShowTimes.map((showTime) => {
            return (
              <Menu.Item
                key={showTime.maLichChieu}
                onClick={() => onSelectDate(showTime.ngayChieuGioChieu)}
              >
                {moment(showTime.ngayChieuGioChieu).format("DD-MM-YYYY")}
              </Menu.Item>
            );
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
        {selectTime ? moment(selectTime).format("DD-MM-YYYY") : "Ngày Xem"}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
