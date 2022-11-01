//img
import cgv from "./../../assets/images/icons/cgv.png";
import bhd from "./../../assets/images/icons/bhd.png";
import galaxycine from "./../../assets/images/icons/galaxycine.png";
import cinestar from "./../../assets/images/icons/cinestar.png";
import lotte from "./../../assets/images/icons/lotte.png";
import megags from "./../../assets/images/icons/megags.png";
import bt from "./../../assets/images/icons/bt.jpg";
import dongdacinema from "./../../assets/images/icons/dongdacinema.png";
import TOUCH from "./../../assets/images/icons/TOUCH.png";
import cnx from "./../../assets/images/icons/cnx.jpg";
import STARLIGHT from "./../../assets/images/icons/STARLIGHT.png";
import VCB from "./../../assets/images/icons/VCB.png";
import VIETTINBANK from "./../../assets/images/icons/VIETTINBANK.png";
import zalopay_icon from "./../../assets/images/icons/zalopay_icon.png";
import zion from "./../../assets/images/icons/zion-logo.jpg";
import payoo from "./../../assets/images/icons/payoo.jpg";
import laban from "./../../assets/images/icons/laban.png";
import AGRIBANK from "./../../assets/images/icons/AGRIBANK.png";
import dcine from "./../../assets/images/icons/dcine.png";
import IVB from "./../../assets/images/icons/IVB.png";
import android from "./../../assets/images/icons/android-logo.png";
import apple from "./../../assets/images/icons/apple-logo.png";
import facebook from "./../../assets/images/icons/facebook-logo.png";
import zalo from "./../../assets/images/icons/zalo-logo.png";
import bocongthuong from "./../../assets/images/icons/bocongthuong.png";

//scss
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row footer__info">
          <div className="col-12 col-sm-12 col-md-4 footer__detail">
            <p className="footer__title">
              TIX
            </p>
            <div className="row">
              <div className="col-5 pr-0 hideOnMobile">
                <a href="#">FAQ</a>
                <br />
                <a href="#">Brand Guidelines</a>
              </div>
              <div className="col-6 pl-0 hideOnMobile">
                <a href="#">Thỏa thuận sử dụng</a>
                <br />
                <a href="#">Chính sách bảo mật</a>
              </div>
              <div className="col-12 hideOnPC">
                <a href="#">FAQ</a>
                <br />
                <a href="#">Brand Guidelines</a>
                <a href="#">Thỏa thuận sử dụng</a>
                <br />
                <a href="#">Chính sách bảo mật</a>
              </div>
            </div>
          </div>
          <div className="col-4 footer__partner hideOnMobile">
            <p className="footer__title">ĐỐI TÁC</p>
            <div>
              <a href="#">
                <img src={cgv} style={{ backgroundColor: "white" }} />
              </a>
              <a href="#">
                <img src={bhd} />
              </a>
              <a href="#">
                <img src={galaxycine} />
              </a>
              <a href="#">
                <img src={cinestar} />
              </a>
              <a href="#">
                <img src={lotte} />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={megags} />
              </a>
              <a href="#">
                <img src={bt} />
              </a>
              <a href="#">
                <img src={dongdacinema} />
              </a>
              <a href="#">
                <img src={TOUCH} />
              </a>
              <a href="#">
                <img src={cnx} />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={STARLIGHT} />
              </a>
              <a href="#">
                <img src={VCB} />
              </a>
              <a href="#">
                <img src={VIETTINBANK} />
              </a>
              <a href="#">
                <img src={zalopay_icon} />
              </a>
              <a href="#">
                <img src={zion} />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={payoo} />
              </a>
              <a href="#">
                <img src={laban} />
              </a>
              <a href="#">
                <img src={AGRIBANK} />
              </a>
              <a href="#">
                <img src={dcine} />
              </a>
              <a href="#">
                <img src={IVB} />
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 footer__app ">
            <div className="col-6 hideOnMobile">
              <p className="footer__title ">MOBILE APP</p>
              <a href="#">
                <img src={android} />
              </a>
              <a href="#">
                <img src={apple} />
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 footer__social">
              <p className="footer__title hideOnMobile">SOCIAL</p>
              <a href="#">
                <img src={facebook} />
              </a>
              <a href="#">
                <img src={zalo} />
              </a>
            </div>
          </div>
        </div>
        <div className="row footer__add">
          <div className="col-12 col-sm-12 col-md-1 p-0">
            <img
              className="imgZion"
              src={zion}
              style={{
                width: "100%",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-8 pr-0">
            <p className="footer__title">
              TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
            </p>
            <p>
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam.
            </p>
            <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p>
              đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
              hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 545 436 </p>
            <p>
              Email:{" "}
              <a href="#" style={{ color: "red" }}>
                support@tix.vn
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-2 p-0">
            <img
              className="imgBoCo"
              src={bocongthuong}
              style={{ width: "100%", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
