import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Categories from "../categories/Categories";
import GroupCard from "../groupCard/GroupCard";
import Navbar from "../navbar/Navbar";
import GroupLanding from "../group/GroupLanding";
import SingleGroup from "../group/SingleGroup";


const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return <GroupLanding></GroupLanding>;
};

export default Home;
