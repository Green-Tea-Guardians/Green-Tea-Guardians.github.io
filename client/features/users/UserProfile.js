import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Profile from "../profile/Profile";

const UserProfile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Profile></Profile>
    </div>
  );
};

export default UserProfile;
