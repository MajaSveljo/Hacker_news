import React from "react";

import "./news-article.scss";

const NewsArticle = ({
  className,
  orderNumber,
  header,
  website,
  points,
  user,
  time,
  commentsNumber,
}) => (
  <div className={"news-article" + " " + className}>
    <span className="news-article__order-number">
      {orderNumber ? orderNumber : "0"}.
    </span>

    <div className="news-article__data-container">
      <span className="news-article__data-container--header">
        {header ? header : "Placeholder text for article header"}
      </span>
      <span className="news-article__data-container--link">
        {website ? website : "wwebsite"}
      </span>

      <div className="news-article__data-container--properties">
        {points ? points : "00"} points by {user ? user : "user"}{" "}
        {time ? time : "1 hour"} ago{" "}
        <span className="pointer">
          {commentsNumber ? commentsNumber : "00"} comments
        </span>
      </div>
    </div>
  </div>
);

export default NewsArticle;
