import axios from "axios";

/**
 * Formats given URL to return only domen name
 * @method
 * @param {string} url - url given as a string
 * @returns string - formatted url
 */
export const formatUrl = (url) => {
  if (!url) {
    return "";
  }
  let formattedUrl = url.split("/")[2];

  if (formattedUrl.indexOf("www") === 0) {
    formattedUrl = formattedUrl.substr(4, formattedUrl.length);
  }
  return `(${formattedUrl})`;
};

/**
 * Compares given time to current time
 * @method
 * @param {number} time - given in seconds
 * @returns string - difference in current and posted time, how long ago was item posted
 */
export const formatArticlePostTime = (time) => {
  if (!time) {
    return null;
  }
  let currentTimeInSeconds = new Date();
  currentTimeInSeconds = currentTimeInSeconds.getTime() / 1000;

  const formattedTime = Math.floor((currentTimeInSeconds - time) / 60 / 60);
  const formattedTimeInMinutes = Math.floor((currentTimeInSeconds - time) / 60);

  if (formattedTime > 23) {
    return "1 day";
  }

  switch (formattedTime) {
    case 0:
      if (formattedTimeInMinutes === 1) {
        return `${formattedTimeInMinutes} minute`;
      }
      return `${formattedTimeInMinutes} minutes`;

    case 1:
      return `${formattedTime} hour`;

    default:
      return `${formattedTime} hours`;
  }
};

/**
 * Formats nubmer of comments to string message
 * @method
 * @param {nubmer} numberOfComments - number of comments
 * @returns string - message depending on comment number
 */
export const formatCommentDisplayText = (numberOfComments) => {
  if (!numberOfComments) {
    return null;
  }
  switch (numberOfComments) {
    case 0:
      return "no comments";
    case 1:
      return `${numberOfComments} comment`;

    default:
      return `${numberOfComments} comments`;
  }
};

/**
 * Fetches item by given item id
 * @method
 * @async
 * @param {number} itemId - id of item whos data is needed
 * @returns Promise - when resolved returns item data as object
 */
export const fetchItem = async (itemId) => {
  const res = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${itemId}.json?print=pretty`
  );

  return res.data;
};
