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
    <div className="nav-container">
      <div className="logo">
        <img src="/images/MainLogo.png" alt="My Logo" />
      </div>
      <nav className="nav-links">
        {isLoggedIn ? (
          <div className="nav-items">
            <Link to="/home">Home</Link>
            <Link to="/profile">Profile</Link>
            <button
              type="button"
              onClick={logoutAndRedirectHome}
              className="logout"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="nav-items">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
