import React from 'react';
import { Link, useNavigate } from "react-router-dom";


function GroupLanding(props) {

    // let navigate = useNavigate(); 
    // const create = () =>{ 
    //     navigate('/create');
    // }
    // const search = () =>{
    //     navigate('/search');
    // }
    // const yourGroup = () =>{
    //     navigate('/yourGroup');
    // }


    return (
        <div>
            {/* <button onClick={create}> Create </button>
            <button onClick={search}> Search </button>
            <button onClick={yourGroup}> Your Groups </button> */}
            <Link to="/create"> Create </Link>
            <Link to="/search"> Search </Link>
            <Link to="/yourGroup"> Your Groups </Link>
        </div>
    );
}

export default GroupLanding;

