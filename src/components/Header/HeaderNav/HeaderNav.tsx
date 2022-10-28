type HeaderNavProps = typeof defaultProps & {
  menu: Array<Object>;
  children?: React.ReactNode;
  className: string;
};

const defaultProps = {
  menu: [
    { name: "Lịch Chiếu", href: "film-header" },
    { name: "Cụm Rạp", href: "film-header" },
    { name: "Tin Tức", href: "film-header" },
    { name: "Ứng Dụng", href: "film-header" },
  ],
  className: "",
};

const HeaderNav = ({ menu, className }: HeaderNavProps) => {
  return (
    <ul className={`header__nav ${className}`}>
      {menu.map((item, index) => {
        return (
          <li key={index}>
            <a href={`#${item.href}`}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

HeaderNav.defaultProps = defaultProps;
export default HeaderNav;
