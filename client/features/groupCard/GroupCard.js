import React from "react";
import { Link } from "react-router-dom";

const GroupCard = ({ group }) => {
  if (!group) {
    return null;
  }

  return (
    <Link to={`/group/${group.id}`} className="groupCard hoverShadowedLink">
      <div className="groupCardPicture"></div>
      <div className="groupCardQuickButton">+</div>
      <div className="groupCardInfo">
        <div className="groupCardTitle">{group.name}</div>
        <div className="groupCardActivityType">{group.description}</div>
        <div className="groupCardLocation">{group.location}</div>
        <div className="groupCardDate">{group.createdAt}</div>
        <div className="groupCardNumberOfPeople">{group.size} people</div>
      </div>
    </Link>
  );
};

export default GroupCard;
