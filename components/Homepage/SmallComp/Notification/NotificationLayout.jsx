import React from "react";

const NotificationLayout = ({ children, heading }) => {
  return (
    <div className="bg-[#EFF9FE] mt-[23px] rounded-[20px] w-[90%] py-[25px] px-[18px]">
      <h3 className="text-[18px] leading-[27px] font-[500]">{heading}</h3>
      <div className="mt-[14px]">{children}</div>
    </div>
  );
};

export default NotificationLayout;
