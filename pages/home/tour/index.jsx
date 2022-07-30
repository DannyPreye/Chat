import React from "react";

import Link from "next/link";

// chakra components
import { Grid, GridItem, LinkBox } from "@chakra-ui/react";
import { Flex, Spacer, Box, Image } from "@chakra-ui/react";

// custom layout
import HomeLayout from "../../../Layout/HomeLayout";

//test values
import { tourPics } from "../../../test/notification";

import { motion } from "framer-motion";

import Masonry from "react-masonry-css";

const tour = () => {
  return (
    <motion.main
      intial={{ opacity: 0, scale: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, type: "linear" }}
      exit={{ opacity: 0 }}
      className="grid place-items-center w-[680px]"
    >
      <div className="w-[90%] grid">
        {" "}
        <h1 className="text-[20px] leading-[30px] font-[500]  text-coolBlue">
          Tour
        </h1>
      </div>
      <Flex as={Masonry} w="90%" breakpointCols={3}>
        {tourPics.map((item, index) => {
          return (
            <Link href="/home/tour/picture" >
              <Image
                w="100%"
                h={`${item.height}px`}
                src={item.img}
                key={index}
                className="cursor-pointer"
              />
            </Link>
          );
        })}
      </Flex>
    </motion.main>
  );
};

export default tour;

tour.Layout = HomeLayout;
