import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    <div id='groups-container'>
    <Link to="/groups" className='group-container'>Group</Link>
    </div>
    </div>
  );
};

export default Home;
