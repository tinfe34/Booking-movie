//slice
import { getCinema, getShowTimes } from "store/modules/getSticketSlice";
import { CumRapChieu } from "interface/cinema";

//hooks
import { useAppDispatch, useAppSelector } from "hooks/store";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import Image from "ui/Image/Image";

export interface ISelectCinema {}

export default function SelectCinema(props: ISelectCinema) {
  const { film, cinema, listCinema } = useAppSelector(
    (state) => state.getSticket
  );

  const dispatch = useAppDispatch();

  const onSelectCinema = (cinema: CumRapChieu) => {
    dispatch(
      getCinema({
        idCinema: cinema.maCumRap,
        nameCinema: cinema.tenCumRap,
        logo: cinema.hinhAnh,
      })
    );

    dispatch(getShowTimes(cinema.lichChieuPhim));
  };

  const renderMenu = () => {
    return (
      <Menu>
        {film.nameFilm ? (
          !!listCinema.length ? (
            listCinema.map((sysCinema) => {
              return sysCinema.cumRapChieu.map((cinema) => {
                return (
                  <Menu.Item
                    key={cinema.maCumRap}
                    onClick={() => onSelectCinema(cinema)}
                  >
                    <Image src={sysCinema.logo} width={50} height={50} />
                    <span className="ml-3">{cinema.tenCumRap}</span>
                  </Menu.Item>
                );
              });
            })
          ) : (
            <Menu.Item>Hiện chưa có cụm rạp chiếu!</Menu.Item>
          )
        ) : (
          <Menu.Item>Vui lòng chọn phim!</Menu.Item>
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
        <span>{cinema.idCinema ? cinema.nameCinema : "Rạp Chiếu"}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
