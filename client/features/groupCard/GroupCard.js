import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { joinGroupAsync, fetchGroupById } from "../group/groupSlice";
import axios from "axios";

const GroupCard = ({ group }) => {
  const [creatorUsername, setCreatorUsername] = useState("");
  const [members, setMembers] = useState([]);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.me.id);

  useEffect(() => {
    const fetchCreatorUsername = async () => {
      try {
        const response = await axios.get(`/api/users/id/${group.creatorId}`);
        setCreatorUsername(response.data?.username || "Unknown");
      } catch (error) {
        console.error("Error fetching creator's username:", error);
      }
    };

    const fetchGroupMembers = async () => {
      try {
        const response = await axios.get(`/api/groups/${group.id}/members`);
        setMembers(response.data || []);
      } catch (error) {
        console.error("Error fetching group members:", error);
      }
    };

    if (group && group.creatorId) {
      fetchCreatorUsername();
      fetchGroupMembers();
    }
  }, [group]);

  if (!group) {
    return null;
  }

  const handleJoinClick = async () => {
    await dispatch(joinGroupAsync({ groupId: group.id, userId }));
    await dispatch(fetchGroupById(group.id));
  };

  return (
    <Link to={`/groups/${group.id}`} className="groupCard hoverShadowedLink">
      <div className="groupCardPicture"></div>
      <div>
        <button onClick={handleJoinClick} className="groupCardQuickButton">Join</button>
      </div>
  
      <div className="groupCardInfo">
        <div className="groupCardTitle">Group Name: {group.name}</div>
        <div className="groupCardActivityType">Description: {group.description}</div>
        <div className="groupCardLocation">Location: {group.location}</div>
        <div className="groupCardDate">Created by: {creatorUsername}</div>
        <div className="groupCardNumberOfPeople">
          {group.size} people ({members.length} members)
         <div className="groupCardMembers">
         {members.map((member, index) => (
           <div key={member.id || index} className="groupCardMember">
             {member.username}
           </div>
         ))}
       </div>
        </div>
      </div>
    </Link>
  );
          }
export default GroupCard;
