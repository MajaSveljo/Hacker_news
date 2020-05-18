import React, { useState, useEffect } from "react";
import axios from "axios";

import "./homepage.scss";

import NewsArticle from "../../components/news-article/news-article";
import Pagination from "../../components/pagination/pagination";

const HomePage = () => {
  const [topStoriesIds, setTopStoriesIds] = useState([]);
  const [currentTopStories, setCurrentTopStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(30);

  useEffect(() => {
    fetchTopStoriesIds();
  }, []);

  useEffect(() => {
    if (topStoriesIds.length) {
      setCurrentTopStories([]);
      for (let i = 0; i < 30; i += 1) {
        fetchItem(topStoriesIds[i + (currentPage - 1) * 30]).then((object) =>
          setCurrentTopStories((currentTopStories) => [
            ...currentTopStories,
            object,
          ])
        );
      }
    }
  }, [topStoriesIds, currentPage]);

  const fetchTopStoriesIds = async () => {
    const res = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );

    setTopStoriesIds(res.data);
  };

  const fetchItem = async (itemId) => {
    const res = await axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${itemId}.json?print=pretty`
    );

    return res.data;
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homepage">
      {currentTopStories.length === articlesPerPage
        ? currentTopStories.map((element, idx) => (
            <NewsArticle
              key={idx}
              orderNumber={idx + 1 + (currentPage - 1) * 30}
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

      <Pagination
        itemsPerPage={articlesPerPage}
        totalItems={topStoriesIds.length}
        paginate={paginate}
      />
    </div>
  );
};

export default HomePage;
