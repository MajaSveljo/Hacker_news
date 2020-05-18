import React from "react";

import "./comments.scss";

import { formatUrl, formatArticlePostTime } from "../../components/utils/utils";
import CommentContainer from "../../components/comment-container/comment-container";

const CommentsPage = ({
  location: {
    state: { header, website, points, user, time, commentsNumber, kids },
  },
}) => (
  <div className="comments-page">
    <div className="comments-page__article">
      <a
        className="header"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
      >
        {header}
      </a>
      <a href={website} target="_blank" rel="noopener noreferrer">
        ({formatUrl(website)})
      </a>
      <div className="comments-page__article--properties">
        {points} points by {user} {formatArticlePostTime(time)} ago{" "}
        {commentsNumber ? `${commentsNumber} comments` : "discuss"}
      </div>
    </div>

    <CommentContainer />
  </div>
);

export default CommentsPage;
