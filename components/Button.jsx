import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const Button = ({ heigt, width, children, onclick, big }) => {
  return (
    <button
      onClick={onclick}
      className={`${
        big ? "h-[40px] w-[173px]" : "h-[55px] w-[160px]"
      } rounded-[5px]  text-gray bg-coolBlue font-[600] font-poppins text-[18px] leading-[30px]`}
    >
      {children}
    </button>
  );
};
Button.protoTypes = {
  heigt: PropTypes.number,
  width: PropTypes.number,
  content: PropTypes.string,
};

export default Button;
