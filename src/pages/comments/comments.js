import React, { useEffect, useState } from "react";

import "./comments.scss";

import {
  formatUrl,
  formatArticlePostTime,
  formatCommentDisplayText,
  fetchItem,
} from "../../components/utils/utils";
import CommentsContainer from "../../components/comments-container/comments-container";

const CommentsPage = ({ location }) => {
  const [header, setHeader] = useState(null);
  const [website, setWebsite] = useState(null);
  const [points, setPoints] = useState(null);
  const [user, setUser] = useState(null);
  const [time, setTime] = useState(null);
  const [commentsNumber, setCommentsNumber] = useState(null);
  const [kids, setKids] = useState(null);
  const [id] = useState(location.pathname.replace("/item/", ""));

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (location.state) {
      setHeader(location.state.header);
      setWebsite(location.state.website);
      setPoints(location.state.points);
      setUser(location.state.user);
      setTime(location.state.time);
      setCommentsNumber(location.state.commentsNumber);
      setKids(location.state.kids);
    } else {
      fetchItem(id).then((res) => {
        setHeader(res.title);
        setWebsite(res.url);
        setPoints(res.score);
        setUser(res.by);
        setTime(res.time);
        setCommentsNumber(res.descendants);
        setKids(res.kids);
      });
    }
  }, []);

  return (
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
          {formatUrl(website)}
        </a>
        <div className="comments-page__article--properties">
          {points} points by {user} {formatArticlePostTime(time)} ago{" "}
          {formatCommentDisplayText(commentsNumber)}
        </div>
      </div>

      <CommentsContainer directCommentsIds={kids} parentId={id} />
    </div>
  );
};

export default CommentsPage;
