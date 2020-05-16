import React, { useState, useEffect } from "react";
import axios from "axios";

import "./homepage.scss";

import NewsArticle from "../../components/news-article/news-article";

const HomePage = () => {
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [currentTopStories, setCurrentTopStories] = useState([]);

  useEffect(() => {
    fetchTopStoriesIds();
  }, []);

  useEffect(() => {
    if (topStoriesIds.length) {
      for (let i = 0; i < 30; i += 1) {
        fetchItem(topStoriesIds[i], currentTopStories, setCurrentTopStories);
      }
    }
  }, [topStoriesIds]);

  useEffect(() => {
    console.log("currStor", currentTopStories);
  }, [currentTopStories]);

  const fetchTopStoriesIds = async () => {
    const res = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );

    setTopStoriesIds(res.data);
  };

  const fetchItem = async (itemId, stateVariable, stateHook) => {
    const res = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${itemId}.json?print=pretty`
    );

    stateHook((stateVariable) => [...stateVariable, res.data]);
  };

  return (
    <div className="homepage">
      {currentTopStories.length === 30
        ? currentTopStories.map((element, idx) => (
            <NewsArticle
              key={idx}
              orderNumber={idx + 1}
              header={element.title}
              website={element.url}
              points={element.score}
              user={element.by}
              time={element.time}
              commentsNumber={element.descendants}
            />
          ))
        : [...Array(30)].map((element, index) => (
            <NewsArticle key={index} className="placeholder" />
          ))}
    </div>
  );
};

export default HomePage;
