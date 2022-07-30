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
        className={`bg-transparent h-[15px] w-[15px] border-[2px] `}
      />

      <label
        htmlFor={id}
        className={`font-poppins font-[400] h-[29px] md:text-[15px] text-${color} leading-[119.5%]  mt-[5px]`}
      >
        {text}
      </label>
    </div>
  );
};

export default RadioInput;
