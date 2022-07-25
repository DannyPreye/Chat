import React from "react";

const IconComp = ({ Icon, className }) => {
  return (
    <>
      <Icon className={`w-[20px] h-[20px] text-text-gray ${className}`} />
    </>
  );
};

export default IconComp;
