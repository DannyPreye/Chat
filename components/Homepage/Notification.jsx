import React from "react";

// next components
import Image from "next/image";

// test values
import { notification, friends } from "../../pages/test/notification";

// custom components
import NotificationLayout from "./SmallComp/Notification/NotificationLayout";
import Trending from "./SmallComp/Notification/Trending";
import FriendSuggestion from "./SmallComp/Notification/FriendSuggestion";

// Icons
const Notification = () => {
  return (
    <div className="py-[30px]  grid w-[400px] place-items-center">
      <div className="w-[90%] rounded-[20px]  bg-[#E6ECF4] h-[50px] flex items-center py-[20px] px-[18px] gap-[15px]">
        <img
          src="/icons/search-icon.svg"
          alt=""
          className="w-[24px] h-[24px]"
        />

        <input
          type="search"
          id="search"
          placeholder="Search Beeperchat"
          className={` block  bg-transparent border-transparent pl-0 text-text-gray   focus:border-transparent   focus:ring-0 py-[4px] text-[16px] leading-[24px] font-poppins `}
        />
      </div>
      <NotificationLayout heading="Trends for you">
        <div className="">
          {notification.map((info, index) => (
            <Trending
              key={index}
              beeps={info.beeps}
              topic={info.topic}
              trending={info.location}
            />
          ))}
        </div>
      </NotificationLayout>

      <NotificationLayout heading="Who to follow">
        {friends.map((friend, index) => (
          <FriendSuggestion
            img={friend.pics}
            name={friend.name}
            username={friend.username}
          />
        ))}
      </NotificationLayout>
    </div>
  );
};

export default Notification;
