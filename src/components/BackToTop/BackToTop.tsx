import backTopImg from "../../assets/images/logoTixLoading.png";
import { BackTop } from "antd";
import Image from "ui/Image/Image";

const BackToTop = () => {
  return (
    <BackTop>
      <div className="ant-back-top-icon">
        <Image
          src={backTopImg}
          alt="totop"
          style={{
            position: "fixed",
            right: "50px",
            width: "50px",
            bottom: "50px",
            zIndex: 1000,
            transform: "rotate(180deg)",
            transition: "all 1s ease-out",
          }}
        />
      </div>
    </BackTop>
  );
};

export default BackToTop;
