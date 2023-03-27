import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function UserProfile(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div id="user-container">
        <Link to="/about"> About You </Link>
        <Link to="/setting"> Additional Settings </Link>
        <Link to="/chat"> Chat </Link>
        <Link to="/yourGroup"> Your Groups </Link>
      </div>
    </div>
  );
}

export default UserProfile;
