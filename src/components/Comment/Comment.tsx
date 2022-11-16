import { Fragment, useRef, useState } from "react";

import avatar from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.png";
import avatar3 from "../../assets/images/avatars/avatar3.png";
import avatar4 from "../../assets/images/avatars/avatar4.png";
import avatar5 from "../../assets/images/avatars/avatar5.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import avatar7 from "../../assets/images/avatars/avatar7.jpg";
import avatar8 from "../../assets/images/avatars/avatar8.jpg";
import avatar9 from "../../assets/images/avatars/avatar9.jpg";
import avatar10 from "../../assets/images/avatars/avatar10.jpg";
import like from "../../assets/images/icons/like.png";
import star1 from "../../assets/images/icons/star1.png";
import star12 from "../../assets/images/icons/star1.2.png";

//scss
import "./Comment.scss";

type Props = {
  reviewer: number;
};

const Comment = (props: Props) => {
  const [noOfElement, setNoOfElement] = useState(5);

  const myRef = useRef<HTMLDivElement>(null);

  const createRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const renderStar = (star: number) => {
    let arrStar = [];
    for (let i = 2; i <= star; i = i + 2) {
      let data;
      if (i == star - 1) {
        if (star % 2 != 0) {
          data = <img className="rateStar" key={i} src={star1} />;
          arrStar.push(data);
          data = <img className="rateStar" key={i + 1} src={star12} />;
          arrStar.push(data);
        }
      } else {
        data = <img className="rateStar" key={i} src={star1} />;
        arrStar.push(data);
      }
    }
    return arrStar;
  };

  const listData = {
    avatar: [
      avatar,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
      avatar8,
      avatar9,
      avatar10,
    ],
    name: [
      "Phương Thảo",
      "Chí Hiếu",
      "Phương Hoàng",
      "Đình Thuận",
      "Kim Nhi",
      "Diệu Hân",
      "Minh Ngọc",
      "Khải Phan",
      "Ngọc Quỳnh",
      "Hồng Liên",
      "Yến Nhi",
      "Bình Lê",
      "Nghiệp Trầm",
      "Quốc Đạt",
      "Uyên Uyên",
      "Thanh Tuyến",
      "Như Ý",
    ],
    comment: [
      "Quá tuyệt vời!! Có đoạn coi mà rưng rưng nước mắt",
      "Phim đỉnh. Rât ok. Nhạc gay cấn. Ko phí tiền đâu các bạn. Điều tra hay quá",
      "Phim hay nhưng lại hết xuất rồi tiếc quá. Muốn xem lại",
      "Phim ko hay lắm, tình tiết tạo ra hơi đơn giản, cố tình tạo gây cấn nhưng ko logic lắm",
      "Thoi anh em chieu roi",
      "Nice shoot , ko làm các tín đồ thất vọng",
      "Phim hay nha, cảm thấy Conan như người ngoài hành tinh z, ghê thiệt",
      "Phải nói rằng là quá hay",
      "Đỉnh của chóp. Đã xem 2 lần",
      "Quá hay luôn coi rất thích",
      "Không hay bằng các phần trước. Ai thích xem hành động thì coi, vì phim chỉ chạy và chạy liên tục xong hết phim, không được logic lắm! Cảnh cảm động cũng làm không tới :(((",
      "Coi xong là rạp đóng covid luôn Ngủ mấy chập luôn haha",
      "lật mặt 1 và lật mặt 5 ko khác là bao nhiêu",
      "thảm hoạ, phim tệ, nội dung thiếu logic, cảnh quay như kịch trong nhà ngoài phố",
      "Trong chờ từ mùa dịch năm rồi.cuối cùng thì...haizzzz",
      "Phim quá hay, các cảnh hành động rất chất lượng",
      "Đánh nhau ko hề giả trân luôn",
      "phim ổn nha các bạn. nên chọn hàng ghế trên, xa màn hình, coi sẽ hay hơn nhé",
      "Bộ phim hay nhất mình từng xem luôn, hay thật sự",
      "Phim hay xuất sắc, cuốn lắm luôn. Xứng đáng để coi",
    ],
  };

  const renderListComment = () => {
    let arrListComment = [];
    let n = props.reviewer;
    for (let i = 0; i < noOfElement; i++) {
      if (i == n) {
        break;
      }
      const rateVote = createRandomNumber(5, 10);
      let arrData = (
        <div className="comment" key={i} ref={myRef}>
          <div className="comment__header">
            <img
              className="avatar__user"
              src={
                listData.avatar[
                  Math.floor(Math.random() * listData.avatar.length)
                ]
              }
            />
            <div className="comment__info">
              <span className="username__user">
                {
                  listData.name[
                    Math.floor(Math.random() * listData.name.length)
                  ]
                }
              </span>
              <br />
              <span className="comment__time">
                {createRandomNumber(1, 5)} tháng trước
              </span>
            </div>
          </div>
          <p className="comment__user">
            {
              listData.comment[
                Math.floor(Math.random() * listData.comment.length)
              ]
            }
          </p>
          <span className="rate">
            <p className="ratePoint">{rateVote}</p>
            <div className="star">{renderStar(rateVote)}</div>
          </span>
          <div className="interactLike">
            <img className="imgLike" src={like} />
            <span className="numLike">{createRandomNumber(1, 5)} Thích</span>
          </div>
        </div>
      );
      arrListComment.push(arrData);
    }
    return arrListComment;
  };
  return (
    <Fragment>
      {renderListComment()}
      {noOfElement <= props.reviewer ? (
        <button
          className="btnLoadMore"
          onClick={() => {
            setNoOfElement(noOfElement + 5);
            myRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Xem Thêm
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Comment;
