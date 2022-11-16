import { useState } from "react";
import { useAppDispatch } from "hooks/store";
import Image from "ui/Image/Image";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

// slice
import { getFilm } from "store/modules/getSticketSlice";

//interface
import { Movie } from "interface/movie";

export interface ISelectFilm {
  listFilm: Movie[];
}

export default function SelectFilm({ listFilm }: ISelectFilm) {
  const [nameFilm, setNameFilm] = useState("");
  const dispatch = useAppDispatch();

  const onSelectFilm = (film: Movie) => {
    setNameFilm(film.tenPhim);
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
      overlay={renderMenu()}
      placement="bottomRight"
      trigger={["click"]}
    >
      <Space className="d-flex p-3 justify-content-between">
        <span>{!!nameFilm ? nameFilm : "Phim"}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
}
