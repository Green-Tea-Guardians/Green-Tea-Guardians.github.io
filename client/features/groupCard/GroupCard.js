import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { joinGroupAsync } from "../group/groupSlice";
import axios from "axios";

const GroupCard = ({ group }) => {
  const [creatorUsername, setCreatorUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    if (group && group.creatorId) {
      fetchCreatorUsername();
    }
  }, [group]);

  if (!group) {
    return null;
  }

  const handleJoinGroup = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      await dispatch(joinGroupAsync({ userId, groupId: group.id }));
      console.log("Successfully joined the group");
    } catch (error) {
      console.error("Error joining the group:", error);
    }
  };

  return (
    <Link to={`/groups/${group.id}`} className="groupCard hoverShadowedLink">
      <div className="groupCardPicture"></div>
      <div className="groupCardQuickButton" onClick={handleJoinGroup}>
        +
      </div>

      <div className="groupCardInfo">
        <div className="groupCardTitle">{group.name}</div>
        <div className="groupCardActivityType">{group.description}</div>
        <div className="groupCardLocation">{group.location}</div>
        <div className="groupCardDate">{creatorUsername}</div>
        <div className="groupCardNumberOfPeople">{group.size} people</div>
      </div>
    </Link>
  );
};

export default GroupCard;
