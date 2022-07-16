import React from "react";

const FormButton = ({ text }) => {
  return (
    <button className=" h-[40px] bg-coolBlue md:w-[357px] text-white  rounded-[5px] font-[500] leading-[30px] text-[]">
      {text}
    </button>
  );
};

export default FormButton;
