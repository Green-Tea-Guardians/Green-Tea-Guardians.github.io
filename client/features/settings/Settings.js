import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bodySizedContainer centeredFlexColumn">
      <div className="centeredContainer centeredFlexColumn">
        <h1>Settings</h1>
        <div id="settingsContainer">
          <div className="settingsBlock">
            <input type="checkbox" id="darkModeInput" name="darkMode"></input>
            <label for="darkMode">Dark Mode</label>
          </div>
          <div className="settingsBlock">
            <input type="checkbox" id="privateProfile" name="privateProfile"></input>
            <label for="privateProfile">Make profile private</label>
          </div>
          <span>Notifications</span>
          <div className="settingsBlock">
            <input type="checkbox" id="groupAcceptanceSetting" name="groupAcceptance" checked></input>
            <label for="groupAcceptance">Include group acceptance</label>
          </div>
          <div className="settingsBlock">
            <input type="checkbox" id="groupUpdatesSetting" name="groupUpdates" checked></input>
            <label for="groupUpdates">Include group updates</label>
          </div>
          <div className="settingsBlock">
            <input type="checkbox" id="groupMessagesSetting" name="groupMessages" checked></input>
            <label for="groupMessages">Include group messages</label>
          </div>
          <div className="settingsBlock">
            <input type="checkbox" id="directMessagesSetting" name="directMessages" checked></input>
            <label for="directMessages">Include direct messages</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
