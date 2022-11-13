import { Link } from "react-router-dom";
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
      <Link to="/">
        <Image src={logo} />
      </Link>
    </div>
  );
};

HeaderLogo.defaultProps = {
  logo: logo,
};

export default HeaderLogo;
