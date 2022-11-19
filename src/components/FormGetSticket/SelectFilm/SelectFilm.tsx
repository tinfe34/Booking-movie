import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "hooks/store";
import Image from "ui/Image/Image";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

// slice
import { getFilm, getListFilmForm } from "store/modules/getSticketSlice";

//interface
import { Movie } from "interface/movie";

export interface ISelectFilm {
}

export default function SelectFilm( props: ISelectFilm) {
  const {
    selectFilm,
    listFilm,
  } = useAppSelector((state) => state.getSticket);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getListFilmForm());

  }, [selectFilm.idFilm]);

  const onSelectFilm = (film: Movie) => {
    dispatch(getFilm({ idFilm: film.maPhim, nameFilm: film.tenPhim }));
  };

  const renderMenu = () => {
    return (
      <Menu>
        {listFilm.map((film) => {
          return (
            <Menu.Item key={film.maPhim} onClick={() => onSelectFilm(film)}>
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

  return (
    <Dropdown
      overlay={renderMenu}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Space className="d-flex p-3 justify-content-between">
        <span>{selectFilm.nameFilm ? selectFilm.nameFilm : "Phim"}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
