import React from "react";
import dynamic from "next/dynamic";
// custom components

const CreatePost = dynamic(() => import("./SmallComp/Timeline/CreatePost"), {
  ssr: false,
});
import Post from "./SmallComp/Timeline/Post";

const TimeLine = () => {
  return (
    <div className=" w-full border-cyan border-r-[1px] relative ">
      <label
        htmlFor="post"
        className="w-[60px] h-[60px] cursor-pointer rounded-full bg-coolBlue grid place-items-center fixed right-60 bottom-0"
      >
        <img src="/icons/pen-icon.svg" alt="" />
      </label>
      <div className="grid place-items-center">
        <h1 className="text-[24px] leading-[36px] w-[90%] text-coolBlue ">
          Timeline
        </h1>
      </div>
      <div className=" divide-y-[1px] divide-cyan">
        {<CreatePost img="/profile/Ellipse 8.png" />}

        {[1, 2, 3, 4, 5, 6, 50, 2, 2, 2, 1, 1, 3].map((id) => (
          <Post
            key={id}
            img="/profile/Ellipse 8.png"
            name="Jane"
            username="@Janedoe"
            time={"5m"}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id malesuada purus, a nam. Habitant nam fermentum in nunc. Cursus est."
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
