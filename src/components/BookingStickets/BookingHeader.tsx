import HeaderLogin from "components/Header/HeaderLogin/HeaderLogin";
import { NavLink } from "react-router-dom";
import Image from "ui/Image/Image";

//img
import logoCGV from "../../assets/images/logo.png";

const BookingHeader = () => {
  return (
    <div className="booking-header">
      <NavLink to="/">
        <Image  src={logoCGV} width={50} height={50}/>
      </NavLink>
      <h3 className="booking-title">Chọn Ghế Và Thanh Toán</h3>
      <HeaderLogin />
    </div>
  );
};

export default BookingHeader;
