import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";
import Navbar from "../navbar/Navbar"


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

      <div className="logo">
      </div>
      <nav className="home-links"> 
      {/* if its logged in */}
        {isLoggedIn ? (
          <div className="home-items">
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
          <div className="home-login">
          <img src="./images/landing-logo.png" alt="Description of image" className="landing-logo"/>
          <button onClick={() => navigate('/login')} id='login-button'>Login</button>
          <button onClick={() => navigate('/signup')} id='signup-button'>Sign Up</button>
        </div>
        )}
      </nav>
    </div>
  );
};

export default Home;
