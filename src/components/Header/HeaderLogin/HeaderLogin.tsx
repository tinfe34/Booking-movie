import React from "react";
import { NavLink } from "react-router-dom";

// hook
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

// img
import avatar from "./../../../assets/images/avatar.png";
import Image from "ui/Image/Image";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

//slices
import { userLogout } from "slices/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

type Props = {};

const HeaderLogin = ({}: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item onClick={() => handleGoToPage()}>Danh Sách Vé</Menu.Item>
      <Menu.Item onClick={() => handleLogout()}>Đăng Xuất</Menu.Item>
    </Menu>
  );

  const handleLogout = () => {
    dispatch(userLogout(null));

    Swal.fire({
      icon: "info",
      title: "Đăng xuất thành công",
    });
  };

  const handleGoToPage = () => {
    navigate("/profile");
  };

  return (
    <div className="header__login">
      {user ? (
        <Dropdown overlay={menu} placement="bottom">
          <Space>
            <Image src="https://joeschmoe.io/api/v1/random" />
            {user?.hoTen}
            <DownOutlined />
          </Space>
        </Dropdown>
      ) : (
        <NavLink to="/login">
          <Image src={avatar} />
          <span>Đăng Nhập</span>
        </NavLink>
      )}
    </div>
  );
};

export default HeaderLogin;
