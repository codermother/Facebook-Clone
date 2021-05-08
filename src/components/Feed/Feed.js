import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender/MessageSender";
import Post from "./MessageSender/Post/Post";
import StoryReel from "./Story/StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQHQYGDbxeYCHA/profile-displayphoto-shrink_200_200/0/1610390628952?e=1623283200&v=beta&t=un9GJuiZCd3T8URm-ccog_g4k5ACK0Ee8FnjQ7Vnf1k"
        message="woww this works"
        timestamp="This is a timestamp"
        username="oskee3"
        image="https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg"
      />
      <Post
        profilePic="https://media-exp1.licdn.com/dms/image/C4D03AQHQYGDbxeYCHA/profile-displayphoto-shrink_200_200/0/1610390628952?e=1623283200&v=beta&t=un9GJuiZCd3T8URm-ccog_g4k5ACK0Ee8FnjQ7Vnf1k"
        message="woww this works"
        timestamp="This is a timestamp"
        username="oskee3"
        image="https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg"
      />
      <Post />
      <Post />
      {/* messagesender */}
      {/*  */}
    </div>
  );
}

export default Feed;
