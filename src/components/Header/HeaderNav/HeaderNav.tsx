import { Anchor } from "antd";

const { Link } = Anchor;

type HeaderNavProps = typeof defaultProps & {
  menu: Array<Object>;
  children?: React.ReactNode;
  className: string;
};

const defaultProps = {
  menu: [
    { name: "Lịch Chiếu", href: "lichchieu" },
    { name: "Danh Sách Phim", href: "danhsachphim" },
    { name: "Cụm Rạp", href: "cumrap" },
    { name: "Tin Tức", href: "tintuc" },
    { name: "Ứng Dụng", href: "ungdung" },
  ],
  className: "",
};

const HeaderNav = ({ menu, className }: HeaderNavProps) => {
  return (
    <div className={`header__nav ${className}`}>
      <Anchor offsetTop={100} affix={false} targetOffset={100}>
        {menu.map((item, index) => {
          return (
            <Link key={index} href={`#${item.href}`} title={item.name}></Link>
          );
        })}
      </Anchor>
    </div>
  );
};

HeaderNav.defaultProps = defaultProps;

export default HeaderNav;
