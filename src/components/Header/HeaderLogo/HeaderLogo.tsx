import { NavLink } from "react-router-dom";
import Image from "ui/Image/Image";
import logo from "../../../assets/images/logo.png";

const defaultProps = {
  logo: logo,
};

type HeaderLogoProps = typeof defaultProps & {
  children?: React.ReactNode;
  logo: string;
};

const HeaderLogo = ({ logo, ...props }: HeaderLogoProps) => {
  return (
    <div className="header__logo" {...props}>
      <NavLink to="/">
        <Image src={logo} />
      </NavLink>
    </div>
  );
};

HeaderLogo.defaultProps = {
  logo: logo,
};

export default HeaderLogo;
