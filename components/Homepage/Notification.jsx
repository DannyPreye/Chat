import React from "react";

// next components
import Image from "next/image";
// custom components

// Icons
const Notification = () => {
  return (
    <div className="py-[30px] grid place-items-center">
      <div className="w-[90%] rounded-[20px]  bg-[#E6ECF4] h-[50px] flex items-center px-[18px] gap-[15px]">
        <img
          src="/icons/search-icon.svg"
          alt=""
          className="w-[24px] h-[24px]"
        />

        <input
          type="search"
          id="search"
          placeholder="Search Beeperchat"
          className={` block  bg-transparent border-transparent pl-0 text-text-gray   focus:border-transparent   focus:ring-0 py-[4px] text-[16px] leading-[24px] font-poppins `}
        />
      </div>
    </div>
  );
};

export default Notification;
