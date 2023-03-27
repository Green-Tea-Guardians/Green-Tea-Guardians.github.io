import React, { useState } from "react";
import Navbar from "../navbar/Navbar";

function CreateGroup(props) {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");

  function handleGroupNameChange(event) {
    setGroupName(event.target.value);
  }

  function handleGroupDescriptionChange(event) {
    setGroupDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newGroup = {
      name: groupName,
      description: groupDescription,
    };

    props.onCreateGroup(newGroup);
  }

  return (
    <div>
      <Navbar></Navbar>
      <div id="createGroupContainer">
        <h1 id="createGroupTitle">Create a group</h1>
        <div id="createGroupBody">
          <div class="createGroupTextField" id="groupTitle">
            <h3>Title of the group</h3>
            <input></input>
          </div>
          <div class="createGroupTextField" id="groupAddress">
            <h3>Venue Address</h3>
            <input></input>
          </div>
          <div class="createGroupTextField" id="groupDate">
            <h3>Event Date</h3>
            <input placeholder="dd / mm / yy"></input>
          </div>
          <div class="createGroupTextField" id="groupType">
            <h2>Event Type</h2>
            <input></input>
          </div>
          <div class="createGroupTextField" id="groupImage">
            <button id="groupImageAddButton"></button>
            <h4>Add Image</h4>
          </div>
          <div class="createGroupTextField" id="groupSettings">
            <h3>Settings</h3>
            <input></input>
          </div>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;

// <form onSubmit={handleSubmit} className="create-container">
//   <label>
//     Group Name:
//     <input type="text" value={groupName} onChange={handleGroupNameChange} />
//   </label>
//   <label>
//     Group Description:
//     <textarea value={groupDescription} onChange={handleGroupDescriptionChange} />
//   </label>
//   <button type="submit">Create Group</button>
// </form>
