import React, { useState } from "react";
import IconCard from "../../components/IconCard";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

import FormButton from "../../components/form/FormButton";

const username = () => {
  return (
    <IconCard heading="Choose a Username">
      <div className="relative border-b-2 border-text-gray">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="@janedoe12"
          className="block w-[400px] border-b-transparent text-text-gray pl-0 border-t-transparent border-l-transparent border-r-transparent focus:border-r-transparent focus:border-t-transparent focus:border-l-transparent focus:ring-0 py-[10px] text-[15px] leading-[18.9px] font-[500]"
        />
        <div className="absolute bottom-[1rem] right-0">
          <BsFillExclamationCircleFill className="text-[#C72214]  w-[20px] h-[20px] " />
          <AiOutlineCheck className="text-[#13D03D]  w-[20px] h-[20px] hidden" />
        </div>
      </div>
      <p className="font-[600] text-[12px] leading-[14.92px] text-center text-[#767676] my-[30px]">
        This username is unavailable. Please try another.
      </p>
      <div className="grid place-items-center">
        <FormButton text="Continue" />
      </div>
    </IconCard>
  );
};

export default username;
