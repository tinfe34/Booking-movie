const ArticleTab = () => {
  return (
    <nav className="article__tab my-3">
      <div
        className="nav nav-tabs article__tab-item"
        id="nav-tab"
        role="tablist"
      >
        <a
          className="nav-item tix-tab nav-link active mr-3"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-movie"
          role="tab"
          aria-controls="nav-movie-tab"
          aria-selected="true"
        >
          Điện Ảnh 24h
        </a>
        <a
          className="nav-item tix-tab nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-review"
          role="tab"
          aria-controls="nav-review-tab"
          aria-selected="false"
        >
          Review
        </a>
        <a
          className="nav-item tix-tab nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-gift"
          role="tab"
          aria-controls="nav-gift-tab"
          aria-selected="false"
        >
          Khuyến mãi
        </a>
      </div>
    </nav>
  );
};

export default ArticleTab;
