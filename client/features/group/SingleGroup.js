import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import GroupCard from "../groupCard/GroupCard";


const SingleGroup = (props) => {
  const dispatch = useDispatch();
  const { id: groupId } = useParams();
  const allGroups = useSelector(selectAllGroups);

  useEffect(() => {
    console.log("Fetching all groups");
    dispatch(fetchGroupsAsync());
  }, [dispatch]);


  const singleGroup = allGroups.find(group => group.id === parseInt(groupId));

  return (
    <div>
      <h1>Single Group</h1>
      {singleGroup && <GroupCard group={singleGroup} />}
    </div>
  );
};

export default SingleGroup;
