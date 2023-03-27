import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const GroupCard = () => {
  return (
    <Link to="/" class="groupCard">
      <div class="groupCardPicture"></div>
      <div class="groupCardQuickButton">+</div>
      <div class="groupCardInfo">
        <div class="groupCardTitle">Title</div>
        <div class="groupCardActivityType">Activity Type</div>
        <div class="groupCardLocation">Location</div>
        <div class="groupCardDate">Date</div>
        <div class="groupCardNumberOfPeople">Number of People</div>
      </div>
    </Link>
  );
};

export default GroupCard;
