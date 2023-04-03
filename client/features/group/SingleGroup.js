import React, { useEffect, useState } from "react";
import GroupCard from "../groupCard/GroupCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchGroupById } from './groupSlice';
import { useParams } from 'react-router-dom';

const SingleGroup = () => {
  const { id: groupId } = useParams();
  const allGroups = useSelector(state => state.allGroups);
  const [group, setGroup] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchGroup = async () => {
      dispatch(fetchGroupById(groupId));
      const fetchedGroup = allGroups.find(g => g.id === parseInt(groupId, 10));
      setGroup(fetchedGroup);
    };
    if (!group) {
      fetchGroup();
    }
  }, [dispatch, groupId, group, allGroups]);

  return (
    <div>
      <h1>Single Group</h1>
      {group ? <GroupCard group={group} /> : <p>Loading group...</p>}
    </div>
  );
};

export default SingleGroup;
