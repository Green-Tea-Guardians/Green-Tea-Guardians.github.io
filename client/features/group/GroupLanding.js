import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import GroupCard from "../groupCard/GroupCard";
import Categories from "../categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupsAsync } from "./groupSlice";

function GroupLanding(props) {
  const dispatch = useDispatch();
  const allGroups = useSelector((state) => state.allGroups);
  useEffect(() => {
    dispatch(fetchGroupsAsync());
  }, [dispatch]);


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
