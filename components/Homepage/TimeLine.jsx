import React, { useEffect } from "react";

// next components
import dynamic from "next/dynamic";

// Chakra Components
import {
  Modal,
  ModalOverlay,
  ModalContent,

  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

// development test
import { post } from "../../test/notification";

// custom components
const CreatePost = dynamic(() => import("./SmallComp/Timeline/CreatePost"), {
  ssr: false,
});

import Post from "./SmallComp/Timeline/Post";

const TimeLine = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className=" w-[680px] relative ">
      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <CreatePost />
          </ModalBody>
        </ModalContent>
      </Modal>

      <div
        onClick={onOpen}
        htmlFor="post"
        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-coolBlue grid place-items-center fixed right-[33%] bottom-10"
      >
        <img src="/icons/pen-icon.svg" alt="" className="h-[20px] w-[20px]" />
      </div>
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
