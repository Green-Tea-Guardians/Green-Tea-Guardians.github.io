import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Categories from "../categories/Categories";
import GroupCard from "../groupCard/GroupCard";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="home-container">
      <Navbar></Navbar>
      <div id="browseGroupsBody">
        <Categories></Categories>
        <div id="displayedGroupsContainer">
          <GroupCard></GroupCard>
        </div>
      </div>
    </div>
  );
};

export default Home;
