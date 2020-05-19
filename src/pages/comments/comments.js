import React from "react";

import "./comments.scss";

import { formatUrl, formatArticlePostTime } from "../../components/utils/utils";
import CommentsContainer from "../../components/comments-container/comments-container";

const CommentsPage = ({
  location: {
    state: { header, website, points, user, time, commentsNumber, kids, id },
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

    <CommentsContainer directCommentsIds={kids} parentId={id} />
  </div>
);

export default CommentsPage;
