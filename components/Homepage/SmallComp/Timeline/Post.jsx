import React from "react";

// next components
import Image from "next/image";

// custom components
import { useState } from "react";

// custom component
import IconComp from "./IconComp";
import ProfilePic from "./ProfilePic";

// icons
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io";
import { ImInfinite } from "react-icons/im";

const Post = ({ img, name, username, time, content, contentPics }) => {
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(false);
  const [unlike, setUnLike] = useState(false);

  return (
    <div className="grid place-items-center py-[20px]">
      <div className="w-[90%] grid place-items-center">
        <div className="grid grid-cols-[1fr,10fr]   w-full">
          <div className="col-span-1">
            <ProfilePic img={img} />
          </div>
          {/* content */}
          <div className="">
            <div className="font-[500] text-[18px]  flex gap-2 text-text-gray">
              <h2 className="text-black">{name}</h2>
              <p className="flex items-baseline gap-2">
                {username} <img src="/icons/Ellipse 11.svg" alt="" />
                <span className="text-[12px]">{time}</span>
              </p>
            </div>
            <p className="text-[15px] font-[500] leading-[18px] ">{content}</p>
          </div>
        </div>
        <div className="w-full ">
          {contentPics && <Image layout="responsive" width={""} />}
        </div>

        {/* Icons */}
        <div className="flex justify-between w-[80%] mt-[10px]">
          <div
            className="cursor-pointer"
            onClick={() => {
              setComment(!comment);
            }}
          >
            <img
              src="/icons/post-icons/comment-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
          </div>

          <div className="cursor-pointer">
            <img
              src="/icons/post-icons/infinity-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
          </div>
          <div
            className={`cursor-pointer `}
            onClick={() => {
              setUnLike(!unlike);
            }}
          >
            <img
              src="/icons/post-icons/dislike-icon.svg"
              alt=""
              className={`${unlike && ""} text-[30px] w-[18px] h-[18px]`}
            />
          </div>
          <div className="cursor-pointer">
            <img
              src="/icons/post-icons/like-icon.svg"
              alt=""
              className="w-[18px] h-[18px]"
            />
          </div>
          <div className="cursor-pointer">
            <img src="/icons/post-icons/share-icon.svg" alt="" className="" />
          </div>
        </div>
        <div className={`w-full ${!comment && "hidden"}`}>
          <textarea
            name=""
            id=""
            placeholder="Make a comment"
            className="min-w-full border-transparent resize-none border-transparent focus:border-transparent focus:outline-transparent focus:ring-0"
          ></textarea>
          <div className="w-full flex justify-end">
            <button className="bg-coolBlue px-4 py-2 rounded-[10px] text-white">
              comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
