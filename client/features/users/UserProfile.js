import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const UserProfile = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div class="bodySizedContainer centeredFlexColumn">
        <div class="centeredContainer centeredFlexColumn">
          <h1>Profile</h1>
          <div id="profileContainer">
            <div class="profileField">
              <span>Name</span>
              <input value="john"></input>
            </div>
            <div class="profileField">
              <span>Email</span>
              <input value="john"></input>
            </div>
            <div class="profileField">
              <span>Gender</span>
              <input value="john"></input>
            </div>
            <div class="profileField">
              <span>Age</span>
              <input value="john"></input>
            </div>
            <div class="profileField">
              <span>Profile Picture</span>
              <input value="john"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
