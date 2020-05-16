import React from "react";

import "./news-article.scss";

const NewsArticle = () => (
  <div className="news-article">
    <span className="news-article__order-number">"1".</span>

    <div className="news-article__data-container">
      <span className="news-article__data-container--header">
        "Swift 5.3 Will Be Supported on Windows and Additional Linux
        Distributions"
      </span>
      <span className="news-article__data-container--link">"(infoq.com)"</span>

      <div className="news-article__data-container--properties">
        "251 points" by "nan0" "7 hours" ago{" "}
        <span className="pointer">"129 comments"</span>
      </div>
    </div>
  </div>
);

export default NewsArticle;
