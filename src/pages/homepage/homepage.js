import React from "react";

import "./homepage.scss";

import NewsArticle from "../../components/news-article/news-article";

const HomePage = () => (
  <div className="homepage">
    HomePage
    <NewsArticle />
    <NewsArticle />
  </div>
);

export default HomePage;
