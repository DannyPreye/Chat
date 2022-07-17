import React from "react";
import HomeLayout from "../../Layout/HomeLayout";
import Masonry from "react-masonry-css";
import { masonry } from "../test/notification";

const tour = () => {
  return (
    <div className="w-[608px] ">
      <div
        className=" grid grid-cols-3 grid-flow-dense m-0 gap-0"
        breakpointCols={3}
      >
        {masonry.map((img, id) => (
          <div>
            {" "}
            <img src={img.img} key={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default tour;

tour.Layout = HomeLayout;
