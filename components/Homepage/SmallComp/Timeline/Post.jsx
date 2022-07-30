import React from "react";

// next components
import Image from "next/image";

// custom components
import { useState } from "react";

// custom component
import IconComp from "./IconComp";
import ProfilePic from "./ProfilePic";

// chakra ui
import {
  Button,
  Popover,
  Portal,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'

// icons
import { BsChat } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdIosShare } from "react-icons/md";
import { ImInfinite } from "react-icons/im";
import { TbHeartBroken } from "react-icons/tb";
import { FaHeartBroken,FaHeart} from "react-icons/fa"

// Framer motion
import { motion, AnimatePresence } from "framer-motion";

const Post = ({ img, name, username, time, content, contentPics }) => {
  const [comment, setComment] = useState(false);
  const [like, setLike] = useState(false);
  const [unlike, setUnLike] = useState(false);
  const [dslk, setDslk] = useState(0);
  const [lk, setLk] = useState(0);

  return (
  
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="grid place-items-center pt-[20px]"
      >
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
              <p className="text-[15px] font-[500] leading-[18px] ">
                {content}
              </p>
            </div>
          </div>
          <div className="w-full ">
            {contentPics && <Image layout="responsive" width={""} />}
          </div>

          {/*:::::::::::::::::::::: Icons  :::::::::::::::::::::::::::::::::::::::::::::::::*/}

          <div className="flex justify-between w-[80%] mt-[10px] items-center pb-1">
            <div
              className="cursor-pointer"
              onClick={() => {
                setComment(!comment);
              }}
            >
              <IconComp Icon={BsChat} alt="" className="w-[18px] h-[18px]" />
            </div>

            <div className="cursor-pointer">

              <Popover>
                <PopoverTrigger>
                  <Button bg="transparent" _hover={{background:"transparent"}} _active={{background:"transparent"}}><IconComp Icon={ImInfinite} className="" /></Button>
                </PopoverTrigger>
                <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
    </PopoverContent>
  </Portal>
              </Popover>
            </div>

            <div
              className={`cursor-pointer relative`}
              onClick={() => {
                setUnLike(!unlike);
                !unlike
                  ? setDslk((prev) => prev + 1)
                  : setDslk((prev) => prev - 1);
              }}
            >
              <IconComp
                Icon={TbHeartBroken}
                className={`${unlike ? "hidden":"block"} `}
              />
              <IconComp Icon={FaHeartBroken} className={`text-red ${!unlike? "hidden":"block"}`} />
              <motion.p intial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="absolute top-[4px] right-[-6px] text-[14px] text-coolBlue">
                {dslk !== 0 && dslk}
              </motion.p>
            </div>
            <div
              className="cursor-pointer relative"
              onClick={() => {
                setLike(!like);
                !like ? setLk((prev) => prev + 1) : setLk((prev) => prev - 1);
              }}
            >
              <IconComp
                Icon={AiOutlineHeart}
                className={`${like? "hidden":"block"}`}
              />
              <IconComp Icon={FaHeart} className={`text-red ${!like? "hidden":"block"}`} />
              <motion.p intial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}} className="absolute top-[4px] right-[-6px] text-[14px] text-coolBlue">
                {lk !== 0 && lk}
              </motion.p>
            </div>
            <div className="cursor-pointer">
              <IconComp Icon={MdIosShare} alt="" className="" />
            </div>
          </div>

          {/*::::::::::::::::::::::::::::::::::: COMMENTS ::::::::::::::::::::::::::::::::::::::::::::::::::::  */}
          <motion.div
            initial={{ scale: 0.5, opacity:0}}
            animate={{ scale: 1, opacity:1}}
            transition={{duration:2}}
            exit={{ opacity: 0 }}
            className={`w-[80%] ${!comment && "hidden"} pb-2`}
          >
            <textarea
              name=""
              id=""
              placeholder="Type your reply"
              className="min-w-full resize-none border-transparent focus:border-transparent focus:outline-transparent focus:ring-0"
            ></textarea>
            <div className="w-full flex justify-end">
              <motion.button
              
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="py-[4px] px-[8px] rounded-[20px] bg-coolBlue text-[12px]font-[500] text-white"
              >
                Comment
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
  );
};

export default Post;
