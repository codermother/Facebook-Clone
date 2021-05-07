import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import StoryReel from "./Story/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      {/* messagesender */}
      {/*  */}
    </div>
  );
}

export default Feed;
