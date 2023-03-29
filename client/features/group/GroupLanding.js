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
      </div>
      <h2>Groups you have applies to</h2>
      <div id="displayedGroupsContainer">
        <GroupCard></GroupCard>
      </div>
    </div>
  );
}

export default GroupLanding;




