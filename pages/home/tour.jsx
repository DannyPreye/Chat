import React from "react";

// chakra components
import { Grid, GridItem } from "@chakra-ui/react";
import { Flex, Spacer, Box, Image } from '@chakra-ui/react'

// custom layout
import HomeLayout from "../../Layout/HomeLayout";

//test values
import { tourPics } from "../../test/notification";

// next components



import Masonry from "react-masonry-css";

const tour = () => {
  return (
  <main className="grid place-items-center w-[680px]">
   <div className="w-[90%] grid"> <h1 className="text-[20px] leading-[30px] font-[500]  text-coolBlue">Tour</h1></div>
     <Flex as={Masonry} w="90%" breakpointCols={3} > 
     
     {tourPics.map((item, index) => {
       return <Image w="100%" h={`${item.height}px`} src={item.img} key={index}  />;
      })}

    </Flex>
  </main>
  );
};

export default tour;

tour.Layout = HomeLayout;
