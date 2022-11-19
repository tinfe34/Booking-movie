import moment from "moment";

//slice
import { changeDate } from "store/modules/getSticketSlice";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export interface ISelectDate {}

export default function SelectDate(props: ISelectDate) {
  const { selectFilm, selectCinema, selectDate, listViewingDate } = useAppSelector(
    (state) => state.getSticket
  );

  const dispatch = useAppDispatch();

  const onSelectDate = (ngayChieuGioChieu: string) => {
    dispatch(changeDate(ngayChieuGioChieu));
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
          listViewingDate.map((date) => {
            return (
              <Menu.Item
                key={date.maLichChieu}
                onClick={() => onSelectDate(date.ngayChieuGioChieu)}
              >
                {moment(date.ngayChieuGioChieu).format("DD-MM-YYYY")}
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
        {selectDate ? moment(selectDate).format("DD-MM-YYYY") : "Ngày Xem"}
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
