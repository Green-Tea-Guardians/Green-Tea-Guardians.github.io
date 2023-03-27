import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import GroupCard from "../groupCard/GroupCard";

function GroupLanding(props) {
  let navigate = useNavigate();
  const create = () => {
    navigate("/create");
  };
  const search = () => {
    navigate("/search");
  };
  return (
    <div>
      <Navbar></Navbar>
      <h1>Your Groups</h1>
      <div id="displayedGroupsContainer">
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
      </div>
      <h2>Groups you have applies to</h2>
      <div id="displayedGroupsContainer">
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
        <GroupCard></GroupCard>
      </div>
    </div>
  );
}

export default GroupLanding;

/*

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
  </div>
</div>



*/
