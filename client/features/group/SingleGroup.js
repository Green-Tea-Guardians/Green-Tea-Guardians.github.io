import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleGroup, selectSingleGroup } from "./singleGroupSlice";

import GroupCard from "../groupCard/GroupCard";
// Other imports

const SingleGroup = (props) => {
  const dispatch = useDispatch();
  const { id: groupId } = useParams();
  const allGroups = useSelector(selectAllGroups); // Get the allGroups state from the Redux store

  useEffect(() => {
    console.log("Fetching all groups");
    dispatch(fetchGroupsAsync());
  }, [dispatch]);

  // Find the single group based on the groupId
  const singleGroup = allGroups.find(group => group.id === parseInt(groupId));

  return (
    <div>
      <h1>Single Group</h1>
      {singleGroup && <GroupCard group={singleGroup} />} {/* Render the GroupCard component with the single group data */}
    </div>
  );
};

export default SingleGroup;
