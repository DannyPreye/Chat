import React from "react";

// chakra components
import { Grid, GridItem } from "@chakra-ui/react";

// custom layout
import HomeLayout from "../../Layout/HomeLayout";

//test values
import { tourPics } from "../../test/notification";

// next components
import dynamic from "next/dist/shared/lib/dynamic";
import Image from "next/image";

import Masonry from "react-masonry-css";

const tour = () => {
  return (
    <Masonry>
      {tourPics.map((item, index) => {
        <img src={item.img} key={index} className="w-max" />;
      })}
    </Masonry>
  );
};

export default tour;

tour.Layout = HomeLayout;
