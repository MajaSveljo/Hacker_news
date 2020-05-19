export const formatUrl = (url) => {
  if (!url) {
    return "";
  }
  let formattedUrl = url.split("/")[2];

  if (formattedUrl.indexOf("www") === 0) {
    formattedUrl = formattedUrl.substr(4, formattedUrl.length);
  }
  return formattedUrl;
};

export const formatArticlePostTime = (time) => {
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

export const formatCommentDisplayText = (numberOfComments) => {
  switch (numberOfComments) {
    case 0:
      return "no comments";
    case 1:
      return `${numberOfComments} comment`;

    default:
      return `${numberOfComments} comments`;
  }
};
