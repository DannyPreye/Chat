import React from "react";

// next components
import Image from "next/image";

// custom components
import IconComp from "./IconComp";
import ProfilePic from "./ProfilePic";

// icons
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io";
import { ImInfinite } from "react-icons/im";

const Post = ({ img, name, username, time, content }) => {
  return (
    <div className="grid place-items-center py-[20px]">
      <div className="w-[90%] grid place-items-center">
        <div className="flex gap-[5px] w-full">
          <ProfilePic img={img} />
          {/* content */}
          <div>
            <div className="font-[500] text-[20px] leading-[] flex gap-2 text-text-gray">
              <h2 className="text-black">{name}</h2>
              <p className="flex items-baseline gap-2">
                {username} <img src="/icons/Ellipse 11.svg" alt="" />
                <span className="text-[12px]">{time}</span>
              </p>
            </div>
            <p className="text-[18px] font-[500] leading-[27px] ">{content}</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex justify-between w-full mt-[10px]">
          <div>
            <img src="/icons/post-icons/comment-icon.svg" alt="" className="" />
          </div>

          <div>
            <img
              src="/icons/post-icons/infinity-icon.svg"
              alt=""
              className=""
            />
          </div>
          <div>
            <img src="/icons/post-icons/dislike-icon.svg" alt="" className="" />
          </div>
          <div>
            <img src="/icons/post-icons/like-icon.svg" alt="" className="" />
          </div>
          <div>
            <img src="/icons/post-icons/share-icon.svg" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
