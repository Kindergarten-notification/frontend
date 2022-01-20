import React from "react";
import { Home, Post, Notification, Album } from "../components/community/index";

const CommunityPage = () => {
  return (
    <div>
      <dix classname="menubar">
        <Home />
        <Post />
        <Notification />
        <Album />
      </dix>
    </div>
  );
};

export default CommunityPage;
