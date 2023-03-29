import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <div id="trendingCategoriesContainer">
      <h1>Trending Categories</h1>
      <div id="trendingCategoriesBody">
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Music
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Business
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Golf
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Dungeons & Dragons
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Gaming
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Climbing
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Comedy
        </Link>
        <Link to="/" class="trendingCategory hoverShadowedLink">
          Hiking
        </Link>
      </div>
    </div>
  );
};

export default Categories;
