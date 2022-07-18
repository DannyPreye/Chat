import React from "react";

const Remember = ({ name, firstText, secondText, reg }) => {
  return (
    <div className="flex justify-between h-[21px]   my-[16px] items-center">
      <div className="flex items-center gap[10px] ">
        <input
          type="checkbox"
          name={name}
          className="w-[16px] h-[16px] rounded-[2px] "
          id="text"
        />
        <label
          htmlFor="text"
          className={`ml-[9px] text-[14px] leading-[21px] font-[500] ${
            reg && "hidden"
          }`}
        >
          {firstText}
        </label>
        <label
          htmlFor="text"
          className={`ml-[9px] text-[13px] leading-[15px] font-[500]  ${
            !reg && "hidden"
          }`}
        >
          I agree to Beeperchat’s <a className="text-coolBlue">Terms </a> and{" "}
          <a className="text-coolBlue">Privacy Policy.</a>
        </label>
      </div>
      <a className="text-coolBlue text-[16px] leading-[24px]">{secondText}</a>
    </div>
  );
};

export default Remember;
