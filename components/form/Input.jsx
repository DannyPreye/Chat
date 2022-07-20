import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import React, { useEffect, useState } from "react";

const Input = ({ type, id, date, name, label, placeholder }) => {
  const [click, setClick] = useState(false);

  const focus = (e) => {
    date && (e.target.type = "date");
  };

  useEffect(() => {
    focus;
  }, []);

  const changePassword = () => {
    type === "password" && setClick(false);
  };
  const changeText = () => {
    type === "password" && setClick(true);
  };
  return (
    <div className="h-fit w-[357px] mt-[2px]">
      {/* <label className="text-[1.2vw] leading-[20px] font-[500]" htmlFor={id}>
        {label}
      </label> */}
      <div className="relative">
        <input
          type={click ? "text" : type}
          name={name}
          onFocus={focus}
          id={id}
          placeholder={placeholder}
          className={` block w-full border-cyan border-b-[2px] pl-0 text-text-gray border-t-transparent border-l-transparent border-r-transparent focus:border-r-transparent focus:border-t-transparent focus:border-l-transparent focus:ring-0 py-[1px] text-[14px] leading-[18px] font-poppins ${
            type === "date" ? "placehoder-gray-500 " : ""
          }`}
        />
        {type == "password" ? (
          <div className="absolute right-[1rem] top-[-0.3rem]">
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
