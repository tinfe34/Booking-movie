//hook
import { useAppDispatch, useAppSelector } from "../../../hooks/store";

//slice
import { setLocation } from "../../../slices/locationSlice";

//img
import locationImg from "../../../assets/images/location-header.png";

//antd
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const defaultProps = {};

type HeaderLocationProps = typeof defaultProps & {};

const HeaderLocation = ({}: HeaderLocationProps) => {
  const { location, listLocation } = useAppSelector((state) => state.location);

  const dispatch = useAppDispatch();

  const handleChangeLocation = (val: string) => {
    dispatch(setLocation(val));
  };
  
  const menu = (
    <Menu>
      {listLocation.map((value, index) => {
        return (
          <Menu.Item key={index}>
            <a
              href="#"
              className="dropdown-item"
              key={index}
              onClick={() => handleChangeLocation(value)}
            >
              {value}
            </a>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div className="header__location  d-none d-lg-block">
      <Dropdown overlay={menu} placement="bottom">
        <Space>
          <div className="header__pos__icon"></div>
          <img className="mr-1" src={locationImg} />
          <span>{location}</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    </div>
  );
};

HeaderLocation.defaultProps = defaultProps;
export default HeaderLocation;
