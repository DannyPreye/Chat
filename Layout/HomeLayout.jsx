import React from "react";
import Menu from "../components/Homepage/Menu";
import Notification from "../components/Homepage/Notification";

const HomeLayout = ({ children }) => {
  return (
    <main className="flex justify-center mx-auto container   font-poppins">
      <Menu />
      <div className="">{children}</div>
      <div className="">
        {" "}
        <Notification />
      </div>
    </main>
  );
};

export default HomeLayout;
