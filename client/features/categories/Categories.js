import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <div id="trendingCategoriesContainer">
      <h1>Trending Categories</h1>
      <div id="trendingCategoriesBody">
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Music
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Business
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Golf
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Dungeons & Dragons
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Gaming
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Climbing
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Comedy
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink">
          Hiking
        </Link>
      </div>
    </div>
  );
};

export default Categories;
