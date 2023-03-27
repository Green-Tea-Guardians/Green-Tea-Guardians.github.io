import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav id="topNavBar">
      <Link to="/" id="navbarLogoSection">
        <img src="/images/MainLogo.png"></img>
      </Link>

      <div class="navLineDivider"></div>

      <div id="navbarMiddleSection">
        <div id="navbarSearchBar">
          <input placeholder="search for keywords" class="reset-style" id="navbarSearchBarKeywordField"></input>
          <input placeholder="Seattle, Wa" id="navbarSearchBarLocationField"></input>
          <button id="navbarSearchBarSubmitButton">
            <i class="fa fa-search"></i>
          </button>
        </div>

        <div id="groupsDropdown">
          <div id="groupsDropdownContainer">
            <span id="groupsDropdownText">Groups</span>
            <span id="groupsDropdownCaret">
              <i class="fa fa-angle-up rotatable"></i>
            </span>
          </div>
          <div id="groupsDropdownContent">
            <Link class="navLink" to="/groups">
              Your Groups
            </Link>
            <Link class="navLink" to="/create">
              Create Group
            </Link>
            <Link class="navLink" to="/browse">
              Browse Groups
            </Link>
          </div>
        </div>
      </div>

      <div class="navLineDivider"></div>

      <div id="navbarLinks">
        <Link class="navLink" to="/messenger">
          <i class="fa fa-comment"></i>
        </Link>
        <Link class="navLink" to="/notifications">
          <i class="fa fa-bell"></i>
        </Link>
        <div id="profileDropdown">
          <button>
            <img
              id="profileDropdownLink"
              src="https://images.unsplash.com/photo-1674574124976-a56d9052c2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img>
            <i class="fa fa-angle-up rotatable"></i>
          </button>
          <div id="profileDropdownContent">
            <Link class="navLink" to="/profile">
              View Profile
            </Link>
            <Link class="navLink" to="/settings">
              Settings
            </Link>
            <Link class="navLink" to="/help">
              Help
            </Link>
            <button class="navLink" onClick={logoutAndRedirectHome}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="nav-container">
//   <div className="logo">
//     <img src="/images/MainLogo.png" alt="My Logo" />
//   </div>
//   <nav className="nav-links">
//     {isLoggedIn ? (
//       <div className="nav-items">
//         <Link to="/home">Home</Link>
//         <Link to="/profile">Profile</Link>
//         <button type="button" onClick={logoutAndRedirectHome} className="logout">
//           Logout
//         </button>
//       </div>
//     ) : (
//       <div className="nav-items">
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Sign Up</Link>
//       </div>
//     )}
//   </nav>
// </div>
