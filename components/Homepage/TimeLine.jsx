import React, { useEffect } from "react";

// next components
import dynamic from "next/dynamic";

// custom components

import { post } from "../../test/notification";
const CreatePost = dynamic(() => import("./SmallComp/Timeline/CreatePost"), {
  ssr: false,
});
import Post from "./SmallComp/Timeline/Post";

const TimeLine = () => {
  useEffect(() => {}, [post]);

  return (
    <div className=" w-[608px] relative ">
      <label
        htmlFor="post"
        className="w-[60px] h-[60px] cursor-pointer rounded-full bg-coolBlue grid place-items-center fixed right-[33%] bottom-10"
      >
        <img src="/icons/pen-icon.svg" alt="" />
      </label>
      <div className="grid place-items-center my-[20px]">
        <h1 className="text-[24px] leading-[36px] w-[90%] text-coolBlue ">
          Timeline
        </h1>
      </div>
      <div className=" divide-y-[0.03px] divide-cyan">
        {<CreatePost img="/profile/Ellipse 8.png" />}

        {post.map((pos, index) => (
          <Post
            key={index}
            img={pos.img}
            name={pos.name}
            username={pos.username}
            time={pos.time}
            content={pos.post}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
