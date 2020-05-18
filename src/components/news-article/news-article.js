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

  const formatArticlePostTime = (time) => {
    let currentTimeInSeconds = new Date();
    currentTimeInSeconds = currentTimeInSeconds.getTime() / 1000;

    const formattedTime = Math.floor((currentTimeInSeconds - time) / 60 / 60);
    const formattedTimeInMinutes = Math.floor(
      (currentTimeInSeconds - time) / 60
    );

    if (formattedTime > 23) {
      return "1 day";
    }

    switch (formattedTime) {
      case 0:
        return `${formattedTimeInMinutes} minutes`;

      case 1:
        return `${formattedTime} hour`;

      default:
        return `${formattedTime} hours`;
    }
  };

  return (
    <div className={"news-article " + className}>
      <span className="news-article__order-number">
        {orderNumber ? orderNumber : "0"}.
      </span>

      <div className="news-article__data-container">
        <span className="news-article__data-container--header">
          {header ? header : "Placeholder text for article header"}
        </span>
        <span className="news-article__data-container--link">
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website ? `(${formatUrl(website)})` : ""}
          </a>
        </span>

        <div className="news-article__data-container--properties">
          {points ? points : "00"} points by {user ? user : "user"}{" "}
          {time ? formatArticlePostTime(time) : "1 hour"} ago{" "}
          <span className="pointer">
            {commentsNumber ? `${commentsNumber} comments` : "discuss"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
