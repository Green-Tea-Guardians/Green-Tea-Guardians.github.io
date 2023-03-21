import React from 'react';
import { useNavigate } from "react-router-dom";


function GroupLanding(props) {

    let navigate = useNavigate(); 
    const create = () =>{ 
        navigate('/create');
    }
    const search = () =>{
        navigate('/search');
    }
    return (
        <div>
            <button onClick={create}> Create </button>
            <button onClick={search}> Search </button>
        </div>
    );
}

export default GroupLanding;