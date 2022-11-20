import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Xin lỗi, trang bạn đã truy cập không tồn tại hoặc đang bảo trì."
      extra={
        <Link to="">
          <Button type="primary">Quay lại trang chủ</Button>
        </Link>
      }
    />
  );
};

export default PageNotFound;
