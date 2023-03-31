import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import GroupCard from "../groupCard/GroupCard";
import { fetchGroupById } from './groupSlice';


const SingleGroup = (props) => {
  const group = useSelector(state => state.groups.group);
  const dispatch = useDispatch();
  const { id: groupId } = useParams();

  useEffect(() => {
    dispatch(fetchGroupById(groupId));
  }, [dispatch, groupId]);

  const singleGroup = allGroups.find(group => group.id === parseInt(groupId));

  return (
    <div>
      <h1>Single Group</h1>
      {singleGroup && <GroupCard group={singleGroup} />}
    </div>
  );
};

export default SingleGroup;
