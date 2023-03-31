import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import GroupCard from '../groupCard/GroupCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGroupsByCreatorId, selectAllGroups } from './groupSlice';

const YourGroups = ({ creatorId }) => {
  const groups = useSelector(selectAllGroups);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchedCreatorId = creatorId || (auth.me && auth.me.id);
    if (fetchedCreatorId) {
      console.log("fetchGroupsByCreatorId with creatorId:", fetchedCreatorId);
      dispatch(fetchGroupsByCreatorId(fetchedCreatorId));
    }
  }, [dispatch, creatorId, auth]);

  return (
    <div >
      <Navbar></Navbar>
      <h1>Your Groups</h1>
      <div id='displayedGroupsContainer'>
        {groups.map((group) => (
          <div key={group.id} className='groupCard'>
            <GroupCard group={group} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourGroups;
