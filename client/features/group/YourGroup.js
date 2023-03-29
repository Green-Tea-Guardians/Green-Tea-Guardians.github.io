import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupsByCreatorId } from './groupSlice';

const YourGroups = ({ creatorId }) => {
  const groups = useSelector((state) =>
    state.allGroups.filter((group) => group.creatorId === creatorId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (creatorId) {
      dispatch(fetchGroupsByCreatorId(creatorId));
    }
  }, [dispatch, creatorId]);

  return (
    <div>
      <h1>Your Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourGroups;
