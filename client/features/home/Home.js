import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div id='groups-container'>
    <Link to="/groups" className='group-container'>Group</Link>
    </div>

  );
};

export default Home;
