import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div class="bodySizedContainer centeredFlexColumn">
      <div class="centeredContainer centeredFlexColumn">
        <h1>Profile</h1>
        <div id="profileContainer">
          <div class="profileContainerLeftSide">
            <div class="profileInputField">
              <span>Name</span>
              <input value="john"></input>
            </div>
            <div class="profileInputField">
              <span>Email</span>
              <input value="john"></input>
            </div>
            <div class="profileInputField">
              <span>Gender</span>
              <input value="john"></input>
            </div>
            <div class="profileInputField">
              <span>Age</span>
              <input value="john"></input>
            </div>
          </div>
          <div class="profileContainerRightSide">
            <div class="profilePictureField">
              <div>+</div>
            </div>
            <div class="profilePictureField">
              <div>+</div>
            </div>
            <div class="profilePictureField">
              <div>+</div>
            </div>
            <div class="profilePictureField">
              <div>+</div>
            </div>
            <div class="profilePictureField">
              <div>+</div>
            </div>
            <div class="profilePictureField">
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
