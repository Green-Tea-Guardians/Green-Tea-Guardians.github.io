import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import SearchGroup from "../group/SearchGroup";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/home");
  };

  return (
    <nav id="topNavBar">
      <Link to="/" id="navbarLogoSection">
        <img src="/images/gooseLogo.png"></img>
        <p>Gaggle</p>
      </Link>

      <div className="navLineDivider"></div>
      <div className="navLineDivider"></div>

      <div id="navbarMiddleSection">
        <div id="navbarSearchBar">
          <SearchGroup></SearchGroup>
        </div>

        <div id="groupsDropdown">
          <div id="groupsDropdownContainer">
            <span id="groupsDropdownText">Groups</span>
            <span id="groupsDropdownCaret">
              <i className="fa fa-angle-up rotatable"></i>
            </span>
          </div>
          <div id="groupsDropdownContent">
            <Link className="navLink" to="/yourGroups">
              Created Groups
            </Link>
            <Link className="navLink" to="/create">
              Create Group
            </Link>
            <Link className="navLink" to="/groups">
              Browse Groups
            </Link>
          </div>
        </div>
      </div>

      <div className="navLineDivider"></div>

      <div id="navbarLinks">
        <Link className="navLink" to="/chat">
          <i className="fa fa-comment"></i>
        </Link>
        <Link className="navLink navLinkBigButton" to="/notifications">
          <i className="fa fa-bell"></i>
        </Link>
        <div id="profileDropdown">
          <button className="navLink navLinkBigButton">
            <img
              id="profileDropdownLink"
              src="https://images.unsplash.com/photo-1674574124976-a56d9052c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img>
            <i className="fa fa-angle-up rotatable"></i>
          </button>
          <div id="profileDropdownContent">
            <Link className="navLink navLinkDropdown" to="/profile">
              View Profile
            </Link>
            <Link className="navLink" to="/settings">
              Settings
            </Link>
            <button className="navLink" onClick={logoutAndRedirectHome}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
