import React from "react";
import { useState } from "react";
const RadioInput = ({
  text,
  id,
  value,
  checked,
  handleChange,
  color,
  borderColor,
}) => {
  return (
    <div className="flex justify-center gap-[10px] items-baseline h-fit">
      <input
        value={value}
        onChange={handleChange}
        type="radio"
        id={id}
        name="account"
        style={{ borderColor: borderColor }}
        className={`bg-transparent h-[20px] w-[20px] border-[3px] `}
      />

      <label
        htmlFor={id}
        className={`font-poppins font-[400] h-[29px] text-[18px] md:text-[24px] text-${color} leading-[119.5%]  mt-[20px]`}
      >
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
