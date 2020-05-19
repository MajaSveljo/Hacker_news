import React, { useState, useEffect } from "react";

import "./comments-container.scss";

import axios from "axios";
import { formatArticlePostTime } from "../utils/utils";

const CommentContainer = ({ directCommentsIds, parentId }) => {
  let allChildrenCommentsId = directCommentsIds || [];

  const [loading, setLoading] = useState(false);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    return () => {
      allChildrenCommentsId = [];
    };
  });

  useEffect(() => {
    fetchAndRenderAllComments(allChildrenCommentsId, setLoading);
  }, [allChildrenCommentsId]);

  const fetchAndRenderAllComments = async (
    listOfIds,
    changeLoadingIndicator
  ) => {
    changeLoadingIndicator(true);
    while (listOfIds.length > 0) {
      const res = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${listOfIds[0]}.json?print=pretty`
      );
      if (res.data && !res.data.deleted) {
        if (res.data.kids) {
          let arrayOfResponseIds = res.data.kids;
          listOfIds = [...listOfIds, ...arrayOfResponseIds];
        }

        let container = document.createElement("div");
        container.className = "comment-container";

        let headingRow = document.createElement("div");
        headingRow.className = "heading-row";

        let user = document.createElement("span");
        user.innerHTML = res.data.by;

        let timeAgo = document.createElement("span");
        timeAgo.innerHTML = formatArticlePostTime(res.data.time);

        let hide = document.createElement("span");
        hide.innerHTML = "hide comment";
        hide.className = "hide-comment";

        let content = document.createElement("div");
        content.className = "content";
        content.setAttribute("data-item-id", `${listOfIds[0]}`);
        content.innerHTML = res.data.text;

        try {
          container.appendChild(headingRow);
          headingRow.appendChild(user);
          headingRow.appendChild(timeAgo);
          headingRow.appendChild(hide);
          container.appendChild(content);

          const parent = document.querySelector(
            `[data-item-id='${res.data.parent}']`
          );

          parent.appendChild(container);
        } catch {
          return;
        }
      }

      listOfIds.shift();

      if (!listOfIds.length) {
        changeLoadingIndicator(false);
      }
    }
  };

  useEffect(() => {
    if (!loading) {
      const test = document.querySelectorAll(".hide-comment");

      for (let i = 0; i < test.length; i += 1) {
        let help = test[i];

        help.onclick = function (e) {
          if (
            e.target.parentNode.parentNode.childNodes[1].classList.contains(
              "hidden"
            )
          ) {
            e.target.parentNode.parentNode.childNodes[1].classList.remove(
              "hidden"
            );
            e.target.innerHTML = "hide comment";
            return;
          }
          e.target.parentNode.parentNode.childNodes[1].classList.add("hidden");
          e.target.innerHTML = "show comment";
        };
      }
    }
  }, [loading]);

  return (
    <div className="comments-container" data-item-id={parentId}>
      {loading ? <div className="loading">Loading comments....</div> : null}
    </div>
  );
};

export default CommentContainer;
