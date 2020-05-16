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
}) => {
  const formatUrl = (url) => {
    let formattedUrl = url.split("/")[2];

    if (formattedUrl.indexOf("www") === 0) {
      formattedUrl = formattedUrl.substr(4, formattedUrl.length);
    }
    return formattedUrl;
  };

  return (
    <div className={"news-article" + " " + className}>
      <span className="news-article__order-number">
        {orderNumber ? orderNumber : "0"}.
      </span>

      <div className="news-article__data-container">
        <span className="news-article__data-container--header">
          {header ? header : "Placeholder text for article header"}
        </span>
        <span className="news-article__data-container--link">
          <a href={website} target="_blank">
            {website ? formatUrl(website) : ""}
          </a>
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
};

export default NewsArticle;
