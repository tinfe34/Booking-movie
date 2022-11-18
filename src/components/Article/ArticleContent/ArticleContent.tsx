const ArticleContent = () => {
  return (
    <div className="tab-content" id="nav-tabContent">
      <div
        className="tab-pane fade show active list__film"
        id="nav-movie"
        role="tabpanel"
        aria-labelledby="nav-movie-tab"
      >
        <div className="row news-movie">
          <div className="col-12 col-sm-6 pb-2 news-movie__item">
            <img src="./images/icons/article/latmat.png" />
            <a href="#" className="article__title">
              Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt:
              48H đậm chất
            </a>
            <p className="article__content">
              Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt
              đuổi gay cấn thót tim fans hâm mộ
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
          <div className="col-12 col-sm-6 news-movie__item">
            <img
              className="w-100 d-block"
              src="./images/icons/article/ali.png"
            />
            <a href="#" className="article__title">
              [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM ĐIỆN ẢNH
              NỔI TIẾNG ĐƯỢC CHUYỂN THỂ TỪ CÁC TỰA GAME ĐÌNH ĐÁM
            </a>
            <p className="article__content">
              Bên cạnh những kịch bản gốc mới mẻ và đầy bất ngờ, Hollywood cũng
              không thiếu những tác phẩm đình đám được chuyển thể từ tiểu
              thuyết, phim hoạt hình, hay thậm chí là cả trò chơi điện tử.
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
        </div>
        <div className="row pt-2">
          <div className="col-12 col-sm-8">
            <div className="row">
              <div className="col-12 col-sm-6  pb-2 news-movie__item">
                <img
                  className="w-100 b-block"
                  src="./images/icons/article/1.png"
                />
                <a href="#" className="articleTitle">
                  PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                  màn trả thù đàn ông để đời
                </a>
                <p className="article__content">
                  Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                  mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                  nghiệp của cô trong phim Promising Young Woman (tựa Việt: Cô
                  Gái Trẻ Hứa Hẹn).
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
              <div className="col-12 col-sm-6  news-movie__item">
                <img
                  className="w-100 b-block"
                  src="./images/icons/article/2.png"
                />

                <a href="#" className="articleTitle">
                  VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                  QUỶ” ĐẢM BẢO ĐỐN TIM HỘI CHỊ EM
                </a>
                <p className="article__content">
                  Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                  năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                  Sik, tác phẩm kinh dị – hành động “Bàn Tay Diệt Quỷ” hứa hẹn
                  sẽ làm cho hội chị em phải mê mẩn vào tháng tới.
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 list-news">
            <div className="col-12 list-news__item">
              <img src="./images/icons/article/3.jpg" />

              <p>Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn</p>
            </div>
            <div className="col-12 list-news__item">
              <img src="./images/icons/article/4.png" />
              <p>“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
            </div>
            <div className="col-12 list-news__item">
              <img src="./images/icons/article/5.png" />
              <p>
                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                chiếu
              </p>
            </div>
            <div className="col-12 list-news__item">
              <img src="./images/icons/article/6.jpg" />
              <p>
                NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG PHỤC
                CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade list__film"
        id="nav-review"
        role="tabpanel"
        aria-labelledby="nav-review-tab"
      >
        <div className="row newsMovie">
          <div className="col-12 col-sm-6 pb-2 newsMovie__item">
            <a href="#">
              <img
                className="w-100 b-block"
                src="./images/icons/article/7.png"
              />
            </a>
            <a href="#" className="articleTitle">
              <p className="newsTitle ng-binding">
                Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
              </p>
            </a>
            <p className="article__content">
              Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
          <div className="col-12 col-sm-6 newsMovie__item">
            <a href="#">
              <img
                className="w-100 d-block"
                src="./images/icons/article/8.png"
              />
            </a>
            <a href="#" className="articleTitle">
              Review: Dinh Thự Oan Khuất (Ghost Of War)
            </a>
            <p className="article__content">
              Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan
              Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
        </div>
        <div className="row pt-2 newsMovieS">
          <div className="col-12 col-sm-8  newsMovieS__left">
            <div className="row">
              <div className="col-12 col-sm-6  pb-2 newsMovieS_left__item ">
                <a href="#">
                  <img
                    className="w-100 b-block"
                    src="./images/icons/article/9.png"
                  />
                </a>
                <a href="#" className="articleTitle">
                  ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
                </a>
                <p className="article__content">
                  Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                  đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                  tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
              <div className="col-12 col-sm-6  newsMovieS_left__item">
                <a href="#">
                  <img
                    className="w-100 b-block"
                    src="./images/icons/article/10.png"
                  />
                </a>
                <a href="#" className="articleTitle">
                  American Sniper - Chính nghĩa hay phi nghĩa?
                </a>
                <p className="article__content">
                  American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                  của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện
                  phim chậm rãi đưa người xem qua từng thời khắc khác nhau của
                  Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham
                  chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 listNews">
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/11.png" />
              </a>
              <a href="#">
                <p>Review: Spider-Man: Into The Spider-Vesre </p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/12.jpg" />
              </a>
              <a href="#">
                <p>
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                </p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/13.jpg" />
              </a>
              <a href="#">
                <p>
                  [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ
                  lầy lội và hài hước đến thế
                </p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/14.jpg" />
              </a>
              <a href="#">
                <p>
                  [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng
                  Valiant{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade list__film"
        id="nav-gift"
        role="tabpanel"
        aria-labelledby="nav-gift-tab"
      >
        <div className="row newsMovie">
          <div className="col-12 col-sm-6 pb-2 newsMovie__item">
            <a href="#">
              <img
                className="w-100 b-block"
                src="./images/icons/article/15.jpg"
              />
            </a>
            <a href="#" className="articleTitle">
              BHD 59K/VÉ CẢ TUẦN !!!
            </a>
            <p className="article__content">
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé
              khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
          <div className="col-12 col-sm-6 newsMovie__item">
            <a href="#">
              <img
                className="w-100 d-block"
                src="./images/icons/article/16.jpg"
              />
            </a>
            <a href="#" className="articleTitle">
              TIX 1K/VÉ NGẠI CHI GIÁ VÉ
            </a>
            <p className="article__content">
              Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02
              voucher thanh toán ZaloPay thả ga
            </p>
            <div className="feedBack">
              <img src="./images/icons/like.png" />
              <img src="./images/icons/comment.png" />
            </div>
          </div>
        </div>
        <div className="row py-2 newsMovieS">
          <div className="col-12 col-sm-8  newsMovieS__left">
            <div className="row">
              <div className="col-12 col-sm-6  pb-2 newsMovieS_left__item">
                <a href="#">
                  <img
                    className="w-100 b-block"
                    src="./images/icons/article/17.png"
                  />
                </a>
                <a href="#" className="articleTitle">
                  ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                </a>
                <p className="article__content">
                  ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                  chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
              <div className="col-12 col-sm-6  newsMovieS_left__item">
                <a href="#">
                  <img
                    className="w-100 b-block"
                    src="./images/icons/article/18.jpg"
                  />
                </a>
                <a href="#" className="articleTitle">
                  BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
                </a>
                <p className="article__content">
                  Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                  59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục
                  Vé Phim trên ZaloPay.
                </p>
                <div className="feedBack">
                  <img src="./images/icons/like.png" />
                  <img src="./images/icons/comment.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4 listNews">
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/19.jpg" />
              </a>
              <a href="#">
                <p>Beta Cineplex trở lại với hàng loạt ưu đãi lớn</p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/20.jpg" />
              </a>
              <a href="#">
                <p>
                  [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt 11k/vé Anh
                  Trai Yêu Quái
                </p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/21.jpg" />
              </a>
              <a href="#">
                <p>
                  [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư
                  Mù: Ai Chết Giơ Tay
                </p>
              </a>
            </div>
            <div className="col-12 list-news__item">
              <a href="#">
                <img src="./images/icons/article/22.png" />
              </a>
              <a href="#">
                <p>[Mega GS] Một đoá hoa thay ngàn lời yêu</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="button-more">XEM THÊM</button>
    </div>
  );
};

export default ArticleContent;
