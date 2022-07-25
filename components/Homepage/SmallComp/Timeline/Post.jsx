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
import { MdIosShare } from "react-icons/md";
import { ImInfinite } from "react-icons/im";
import { TbHeartBroken } from "react-icons/tb";

const Post = ({ img, name, username, time, content, contentPics }) => {
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(false);
  const [unlike, setUnLike] = useState(false);
  const [dslk, setDslk] = useState("")

  return (
    <div className="grid place-items-center pt-[20px]">
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


        {/*:::::::::::::::::::::: Icons  :::::::::::::::::::::::::::::::::::::::::::::::::*/}
        <div className="flex justify-between w-[77%] mt-[10px] items-center pb-1">
          <div
            className="cursor-pointer"
            onClick={() => {
              setComment(!comment);
            }}
          >
            <IconComp Icon={BsChat} alt="" className="w-[18px] h-[18px]" />
          </div>

          <div className="cursor-pointer">
            <IconComp Icon={ImInfinite} className="" />
          </div>
          <div
            className={`cursor-pointer relative`}
            onClick={() => {
              setUnLike(!unlike);
              !unlike ? setDslk(1) : setDslk("")
            }}
          >
            <IconComp
              Icon={TbHeartBroken}
              className={`${unlike && "text-red"} `}
            />
            {}
            <p className="absolute top-[-2px] right-[-2px] text-[12px] text-coolBlue">{dslk}</p>
          </div>
          <div className="cursor-pointer" onClick={() => {
              setLike(!like);
              console.log(like)
            }}>
            <IconComp Icon={AiOutlineHeart}  className={`${like && "text-coolBlue"}`} />
          </div>
          <div className="cursor-pointer">
            <IconComp Icon={MdIosShare} alt="" className="" />
          </div>
        </div>

        {/*::::::::::::::::::::::::::::::::::: COMMENTS ::::::::::::::::::::::::::::::::::::::::::::::::::::  */}
        <div className={`w-full ${!comment && "hidden"} pb-2`}>
          <textarea
            name=""
            id=""
            placeholder="Type your reply"
            className="min-w-full resize-none border-transparent focus:border-transparent focus:outline-transparent focus:ring-0"
          ></textarea>
          <div className="w-full flex justify-end">

          <button
            className="py-2 px-4 rounded-[20px] bg-coolBlue text-[12px]font-[500] text-white"
          >
            Comment
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
