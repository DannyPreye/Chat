import React from "react";

import ProfilePic from "../Timeline/ProfilePic";

const FriendSuggestion = ({ img, name, username }) => {
  return (
    <div className="flex gap-[5px] mt-[14px]">
      <ProfilePic img={img} />
      <div className="flex justify-between flex-1">
        <div>
          <h3 className="text-[16px] leading-[24px] font-[500]">{name}</h3>
          <p className="text-[13px] leading-[20px] text-text-gray font-[500]">
            {username}
          </p>
        </div>
        <button className="grid place-items-center min-w-[90px]  h-[30px] bg-coolBlue rounded-[5px] text-white text-[14px] leading-[21px]">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FriendSuggestion;
