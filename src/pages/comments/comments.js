import React from "react";

import "./comments.scss";

const CommentsPage = ({
  location: {
    state: { header, website, points, user, time, commentsNumber, kids },
  },
}) => (
  <div className="comments-page">
    <div className="comments-page__article">
      <a>{header}</a>
      <a>{website}</a>
      <div className="comments-page__properties">
        {points} points by {user} {time} ago{" "}
        {commentsNumber ? `${commentsNumber} comments` : "discuss"}
      </div>
    </div>
  </div>
);

export default CommentsPage;
