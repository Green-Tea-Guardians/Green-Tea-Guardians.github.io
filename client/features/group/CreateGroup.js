import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { createGroupAsync } from "./groupSlice";
import { useNavigate } from "react-router-dom";

const CreateGroup = () => {
  const userId = useSelector((state) => state.me && state.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    name: "",
    description: "",
    location: "",
    size: "",
    public: "",
    ages: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGroupData((prevGroupData) => ({ ...prevGroupData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!groupData.name || !groupData.ages) {
      alert("Name and Ages fields are required!");
      return;
    }
    const data = {
      ...groupData,
      size: groupData.size || 0,
      creatorId: userId,
    };
    dispatch(createGroupAsync({ groupData: data })).then(() => {
      navigate("/yourGroups");
    });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="groupsBody">
        <div id="createGroupContainer">
          <h1 id="createGroupTitle">Create Group</h1>
          <form className="createGroupForm" onSubmit={handleSubmit}>
            <div className="createGroupField">
              <label htmlFor="name">Name</label>
              <input
                className="createGroupTextField"
                type="text"
                id="name"
                name="name"
                value={groupData.name}
                onChange={handleChange}
              />
            </div>
            <div className="createGroupField">
              <label htmlFor="description">Description</label>
              <textarea
                className="createGroupTextField createGroupDescription"
                id="description"
                name="description"
                value={groupData.description}
                onChange={handleChange}
              />
            </div>
            <div className="createGroupField">
              <label htmlFor="location">Location</label>
              <input
                className="createGroupTextField"
                type="text"
                id="location"
                name="location"
                value={groupData.location}
                onChange={handleChange}
              />
            </div>
            <div className="createGroupField">
              <label htmlFor="size">Size</label>
              <input
                className="createGroupTextField"
                type="number"
                id="size"
                name="size"
                value={groupData.size}
                onChange={handleChange}
              />
            </div>
            <div className="createGroupField createGroupFieldInline">
              <input
                className="createGroupTextField"
                type="checkbox"
                id="public"
                name="public"
                checked={groupData.public}
                onChange={handleChange}
              />
              <label htmlFor="public">Public</label>
            </div>
            <div className="createGroupField">
              <label htmlFor="ages">Age Range</label>
              <input
                className="createGroupTextField"
                type="text"
                id="ages"
                name="ages"
                value={groupData.ages}
                onChange={handleChange}
              />
            </div>
            <button className="createGroupButton" type="submit">
              Create Group
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
