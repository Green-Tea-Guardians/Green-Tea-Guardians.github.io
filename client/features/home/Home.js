import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GroupLanding from "../group/GroupLanding"

const Home = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  return (
    <div className="home-container">

      <div className="logo">
      </div>
      <nav className="home-links"> 
      {/* if its logged in */}
        {isLoggedIn ? (
          <div className="home-items">
    <GroupLanding />
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
