//component
import ArticleContent from "./ArticleContent/ArticleContent";
import ArticleTab from "./ArticleTab/ArticleTab";

//scss
import "./Article.scss";

const Article = () => {
  return (
    <section className="article" id="article">
      <div className="container">
        <ArticleTab />
        <ArticleContent/>
      </div>
    </section>
  );
};

export default Article;
