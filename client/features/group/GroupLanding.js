import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import GroupCard from "../groupCard/GroupCard";
import Categories from "../categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupsAsync } from "./groupSlice";
import { useNavigate } from "react-router-dom";

function GroupLanding(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const allGroups = useSelector((state) => state.allGroups);

  useEffect(() => {
    dispatch(fetchGroupsAsync());
  }, [dispatch]);

  const create = () => {
    navigate("/create");
  };
  const search = () => {
    navigate("/search");
  };

  if (!allGroups) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="groupsBody">
        <Categories></Categories>
        <div id="displayedGroupsContainer">
          {allGroups.map((group) => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupLanding;
