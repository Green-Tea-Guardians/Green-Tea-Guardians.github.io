import React, { useState } from 'react';
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { createGroupAsync } from './groupSlice';
import { useNavigate } from 'react-router-dom';


const CreateGroup = () => {
  const userId = useSelector((state) => state.me && state.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    name: '',
    description: '',
    location: '',
    size: '',
    public: '',
    ages: '',
  });
 
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setGroupData((prevGroupData) => ({ ...prevGroupData, [name]: value }));
  };
 
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!groupData.name || !groupData.ages) {
      alert('Name and Ages fields are required!');
      return;
    }
    const data = {
      ...groupData,
      size: groupData.size || 0,
      creatorId: userId,
    };
    dispatch(createGroupAsync({ groupData: data })).then(() => {
      navigate('/yourGroup');
    });
  };
  return (
    <div>
    <Navbar></Navbar>
    <div id="createGroupContainer">
      <h1 id="createGroupTitle">Create a group</h1>
      <form onSubmit={handleSubmit}>
        <div id="createGroupBody">
          <label htmlFor="name">Name:</label>
          <input  className="createGroupTextField" type="text" id="name" name="name" value={groupData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={groupData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input  className="createGroupTextField" type="text" id="location" name="location" value={groupData.location} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input  className="createGroupTextField" type="number" id="size" name="size" value={groupData.size} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="public">Public:</label>
          <input  className="createGroupTextField" type="checkbox" id="public" name="public" checked={groupData.public} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ages">Ages:</label>
          <input  className="createGroupTextField" type="text" id="ages" name="ages" value={groupData.ages} onChange={handleChange} />
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
    </div>
  );
 };

 export default CreateGroup;