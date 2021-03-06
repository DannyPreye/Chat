import React from "react";

// next component
import Image from "next/image";
import Link from "next/link";

// custom component
import MenuItem from "./SmallComp/Menu/MenuItem";
import Profile from "./SmallComp/Menu/Profile";

// image
import profilepics from "../../public/profile/Ellipse 8.png";

// icons
import { AiFillHome } from "react-icons/ai";
import { BsGlobe, BsBookmark } from "react-icons/bs";
import { BiEnvelope, BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";

const Menu = () => {
  return (
    <div className=" grid place-items-center  w-[25%] border-r-[1px] hide-scrollbar border-cyan">
      <div className="flex flex-col justify-between h-full fixed left-20 top-0  ">
        <div className="grid gap-[26px] mt-[10px]">
          <div className="">
            <Image src="/beeperchat/Asset1.svg" alt="" width={60} height={60} />
          </div>
          <MenuItem
            content="Timeline"
            Icon={AiFillHome}
            link="/home/timeLine"
          />
          <MenuItem content="Tour" Icon={BsGlobe} link="/home/tour" />
          <MenuItem
            content="Notification"
            Icon={IoIosNotificationsOutline}
            link="/home/notification"
            notification
          />
          <MenuItem content="Messages" Icon={BiEnvelope} link="/home/message" />
          <MenuItem content="Saved" Icon={BsBookmark} link="/home/saved" />
          <MenuItem content="Profile" Icon={BiUser} />
          <MenuItem content="More" Icon={CgMoreO} />
        </div>
        <Profile
          src={"/profile/Ellipse 8.png"}
          name="Jane"
          username="@janedoe"
        />
      </div>
    </div>
  );
};

export default Menu;
