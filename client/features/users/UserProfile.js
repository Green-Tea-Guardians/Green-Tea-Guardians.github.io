import React from 'react';
import { Link } from 'react-router-dom';

function UserProfile(props) {


    return (
        <div id='user-container'>
            <Link to='/about'> About You </Link>
            <Link to='/setting'> Additional Settings </Link>
            <Link to='/chat'> Chat </Link>
            <Link to='/yourGroup'> Your Groups </Link>
        </div>
    );
}

export default UserProfile;