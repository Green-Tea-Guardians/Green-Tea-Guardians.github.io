import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <div id="trendingCategoriesContainer">
      <h1>Trending Categories</h1>
      <div id="trendingCategoriesBody">
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
        <Link to="/" class="trendingCategory">
          Music
        </Link>
      </div>
    </div>
  );
};

export default Categories;
