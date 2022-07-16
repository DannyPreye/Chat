import React from "react";
import dynamic from "next/dynamic";
// custom components

const CreatePost = dynamic(() => import("./SmallComp/Timeline/CreatePost"), {
  ssr: false,
});
import Post from "./SmallComp/Timeline/Post";

const TimeLine = () => {
  return (
    <div className=" w-full border-cyan border-r-[1px] divide-y-[1px] divide-cyan ">
      <h1 className="text-[24px] leading-[36px] text-coolBlue ">Timeline</h1>
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
  );
};

export default TimeLine;
