import React, { useState, useEffect } from "react";
import axios from "axios";

import "./homepage.scss";

import { fetchItem } from "../../components/utils/utils";
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
    const getPaginatedCurrentPageData = async (
      itemsIds,
      currPage,
      numberOfArticles
    ) => {
      const currentIds = itemsIds.slice(
        (currPage - 1) * numberOfArticles,
        currPage * numberOfArticles
      );

      let items = await Promise.all(
        currentIds.map(async (articleId) => {
          let res = await fetchItem(articleId);
          return res;
        })
      );

      return items;
    };

    if (topStoriesIds.length) {
      setCurrentTopStories([]);

      getPaginatedCurrentPageData(
        topStoriesIds,
        currentPage,
        articlesPerPage
      ).then((items) => setCurrentTopStories(items));
    }
  }, [topStoriesIds, currentPage, articlesPerPage]);

  const fetchTopStoriesIds = async () => {
    const res = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );

    setTopStoriesIds(res.data);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homepage">
      {currentTopStories.length
        ? currentTopStories.map((element, idx) => (
            <NewsArticle
              key={idx}
              orderNumber={idx + 1 + (currentPage - 1) * articlesPerPage}
              header={element.title}
              website={element.url}
              points={element.score}
              user={element.by}
              time={element.time}
              commentsNumber={element.descendants}
              kids={element.kids}
              id={element.id}
            />
          ))
        : [...Array(articlesPerPage)].map((element, index) => (
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
