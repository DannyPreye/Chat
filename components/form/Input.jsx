import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import React, { useState } from "react";

const Input = ({ type, id, name, label, placeholder }) => {
  const [click, setClick] = useState(false);
  const changePassword = () => {
    type === "password" && setClick(false);
  };
  const changeText = () => {
    type === "password" && setClick(true);
  };
  return (
    <div className="h-fit w-[357px] mt-[10px]">
      {/* <label className="text-[1.5vw] leading-[30px] font-[500]" htmlFor={id}>
        {label}
      </label> */}
      <div className="relative">
        <input
          type={click ? "text" : type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={` block w-full border-cyan border-b-[2px] pl-0 text-text-gray border-t-transparent border-l-transparent border-r-transparent focus:border-r-transparent focus:border-t-transparent focus:border-l-transparent focus:ring-0 py-[4px] text-[20px] leading-[30px] font-poppins ${
            type === "date" ? "placehoder-gray-500 " : ""
          }`}
        />
        {type == "password" ? (
          <div className="absolute right-[1rem] top-4">
            <AiOutlineEyeInvisible
              onClick={changePassword}
              className={`w-[20px] h-[20px] ${!click ? "hidden" : ""} `}
            />{" "}
            <AiOutlineEye
              onClick={changeText}
              className={`w-[20px] h-[20px] ${click ? "hidden" : ""} `}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Input;
