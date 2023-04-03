import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import { me } from "./store";
import CreateGroup from "../features/group/CreateGroup";
import SearchGroup from "../features/group/SearchGroup";
import GroupLanding from "../features/group/GroupLanding";
import UserProfile from "../features/users/UserProfile";
import ChatApp from "../features/chat/ChatApp";
import YourGroups from "../features/group/YourGroups";
import About from "../features/users/About";
import Setting from "../features/users/Setting";
import Notifications from "../features/notifications/Notifications";
import SingleGroup from "../features/group/SingleGroup";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateGroup />} />
          <Route path="/search" element={<SearchGroup />} />
          <Route path="/groups" element={<GroupLanding />} />
          <Route path="/groups/:id" element={<SingleGroup />} />
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/yourGroups" element={<YourGroups />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<AuthForm name="login" displayName="Login" />} />
          <Route path="/signup" element={<AuthForm name="signup" displayName="Sign Up" />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
