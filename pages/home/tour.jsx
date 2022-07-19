import React from "react";
import HomeLayout from "../../Layout/HomeLayout";
import Masonry from "react-masonry-css";
import { masonry } from "../../test/notification";

import dynamic from "next/dist/shared/lib/dynamic";
import Image from "next/image";

const { GridLayout } = dynamic(() => import("@egjs/react-layout"), {
  ssr: false,
});
const tour = () => {
  return (
    <div className="w-[608px]  grid place-items-center ">
      <div className="gridLayout">
        {masonry.map((img, id) => (
          <div key={id}>
            <Image
              src={img.img}
              width={img.width}
              height={img.height}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default tour;

tour.Layout = HomeLayout;
