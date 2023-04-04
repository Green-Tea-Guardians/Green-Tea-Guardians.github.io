import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import GroupCard from "../groupCard/GroupCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupsByCreatorId, selectAllGroups } from "./groupSlice";

const YourGroups = ({ creatorId }) => {
  const groups = useSelector(selectAllGroups);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchedCreatorId = creatorId || (auth.me && auth.me.id);
    if (fetchedCreatorId) {
      dispatch(fetchGroupsByCreatorId(fetchedCreatorId));
    }
  }, [dispatch, creatorId, auth]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="groupsBody">
        <h1>Created Groups</h1>
        <div id="displayedGroupsContainer">
          {groups.map((group) => (
            <GroupCard key={group.id} group={group} className="groupCard"></GroupCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourGroups;
