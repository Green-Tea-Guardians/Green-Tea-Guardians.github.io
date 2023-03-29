import React from 'react';
import { useSelector } from 'react-redux';

function YourGroup(props) {
  const userId = props.userId;
  const allGroups = useSelector(state => state.group.allGroups);
  const userGroups = allGroups.filter(group => group.creatorId === userId);

  return (
    <div>
      <h2>Your Groups</h2>
      <ul>
        {userGroups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default YourGroup;
