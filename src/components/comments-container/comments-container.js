import React, { useState, useEffect } from "react";

import "./comments-container.scss";

import axios from "axios";

const CommentContainer = ({ directCommentsIds, parentId }) => {
  let allChildrenCommentsId = directCommentsIds || [];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAndRenderAllComments(allChildrenCommentsId, setLoading);
  }, [allChildrenCommentsId]);

  const fetchAndRenderAllComments = async (
    listOfIds,
    changeLoadingIndicator
  ) => {
    if (!listOfIds.length) {
      changeLoadingIndicator(false);
      return;
    }
    while (listOfIds.length > 0) {
      const res = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${listOfIds[0]}.json?print=pretty`
      );
      if (res.data && !res.data.deleted) {
        if (res.data.kids) {
          let arrayOfResponseIds = res.data.kids;
          listOfIds = [...listOfIds, ...arrayOfResponseIds];
        }

        let divElement = document.createElement("div");
        divElement.innerHTML = listOfIds[0];
        divElement.setAttribute("data-item-id", `${listOfIds[0]}`);
        divElement.className = "margin-div";
        divElement.innerHTML = res.data.text;

        // let divHide = document.createElement("div");
        // divHide.innerHTML = "hide";
        // divHide.className = "red";
        // divElement.appendChild(divHide);

        const parent = document.querySelector(
          `[data-item-id='${res.data.parent}']`
        );
        parent.appendChild(divElement);
      }

      listOfIds.shift();

      if (!listOfIds.length) {
        changeLoadingIndicator(false);
      }
    }
  };

  // hiding/showing comments basic logic

  // useEffect(() => {
  //   if (!loading) {
  //     const test = document.querySelectorAll(".red");

  //     for (let i = 0; i < test.length; i += 1) {
  //       let help = test[i];

  //       help.onclick = function (e) {
  //         if (e.target.parentNode.classList.contains("red")) {
  //           e.target.parentNode.classList.remove("red");
  //           return;
  //         }
  //         e.target.parentNode.classList.add("red");
  //       };
  //     }
  //   }
  // }, [loading]);

  return (
    <div className="comments-container" data-item-id={parentId}>
      {loading ? <div>Loading comments....</div> : null}
    </div>
  );
};

export default CommentContainer;
