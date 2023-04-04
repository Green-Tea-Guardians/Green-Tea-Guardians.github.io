import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Categories = () => {
  return (
    <div id="trendingCategoriesContainer">
      <h1></h1>
      <div id="trendingCategoriesBody">
        <Link to="/" className="trendingCategory hoverShadowedLink" id="music">
          Music
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="business">
          Business
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="golf">
          Golf
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="DandD">
          Dungeons & Dragons
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="gaming">
          Gaming
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="climbing">
          Climbing
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="comedy">
          Comedy
        </Link>
        <Link to="/" className="trendingCategory hoverShadowedLink" id="hiking">
          Hiking
        </Link>
      </div>
    </div>
  );
};

export default Categories;
