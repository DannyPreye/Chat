import React from "react";
import Menu from "../components/Homepage/Menu";
import Notification from "../components/Homepage/Notification";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex justify-center font-poppins">
      <Menu />
      <div className="w-[50%]">{children}</div>
      <div className="w-[25%]">
        {" "}
        <Notification />
      </div>
    </div>
  );
};

export default HomeLayout;
