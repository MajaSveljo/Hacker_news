import React from "react";

import "./news-article.scss";

import {
  formatUrl,
  formatArticlePostTime,
  formatCommentDisplayText,
} from "../utils/utils";

import { withRouter } from "react-router-dom";

const NewsArticle = ({
  className,
  id,
  orderNumber,
  header,
  website,
  points,
  user,
  time,
  commentsNumber,
  kids,
  history,
}) => {
  return (
    <div className={"news-article " + className}>
      <span className="news-article__order-number">
        {orderNumber ? orderNumber : "0"}.
      </span>

      <div className="news-article__data-container">
        <span className="news-article__data-container--header">
          <a href={website} target="_blank" rel="noopener noreferrer">
            {header ? header : "Placeholder text for article header"}
          </a>
        </span>
        <span className="news-article__data-container--link">
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website ? `(${formatUrl(website)})` : ""}
          </a>
        </span>

        <div className="news-article__data-container--properties">
          {points ? points : "00"} points by {user ? user : "user"}{" "}
          {time ? formatArticlePostTime(time) : "1 hour"} ago{" "}
          <span
            className="pointer"
            onClick={() =>
              history.push(`item/${id}`, {
                header,
                website,
                points,
                user,
                time,
                commentsNumber,
                kids,
                id,
              })
            }
          >
            {formatCommentDisplayText(commentsNumber)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsArticle);
