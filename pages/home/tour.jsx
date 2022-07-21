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

const tour = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      templateRows="repeat(2, 1fr)"
      width={605}
      marginTop="10px"
    >
      {tourPics.map((img, index) => (
        <GridItem colSpan={"auto"} key={index}>
          <img src={img.img} alt="" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default tour;

tour.Layout = HomeLayout;
