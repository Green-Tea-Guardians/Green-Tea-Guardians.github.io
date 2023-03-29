import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleGroup } from "./singleGroupSlice";

const GroupDetail = () => {
  const { groupId } = useParams();
  const group = useSelector((state) => state.SingleGroup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleGroup(groupId));
  }, [dispatch, groupId]);

  if (!group) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{group.name}</h1>
      <p>{group.description}</p>
      <p>{group.location}</p>
      <p>{group.createdAt}</p>
      <p>{group.size} people</p>
    </div>
  );
};

export default GroupDetail;
