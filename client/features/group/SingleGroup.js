import React, { useEffect, useState } from "react";
import GroupCard from "../groupCard/GroupCard";
import Navbar from "../navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupById } from "./groupSlice";
import { useParams } from "react-router-dom";

const SingleGroup = () => {
  const { id: groupId } = useParams();
  const allGroups = useSelector((state) => state.allGroups);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGroup = async () => {
      dispatch(fetchGroupById(groupId));
    };
    fetchGroup();
  }, [dispatch, groupId]);

  const group = allGroups.find((g) => g.id === parseInt(groupId, 10));

  return (
    <div>
      <Navbar/>
      <h1>Single Group</h1>
      <div className="groupCard">
        {group ? <GroupCard group={group} /> : <p>Loading group...</p>}
      </div>
    </div>
  );
};

export default SingleGroup;
