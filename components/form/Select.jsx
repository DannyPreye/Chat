import React from "react";

const Select = ({ label, id }) => {
  return (
    <div className="h-fit  md:w-[357px] mt-[15px]">
      {/* <label className="text-[1.2vw] leading-[20px] font-[500]" htmlFor={id}>
        {label}
      </label> */}
      <select
        name=""
        id=""
        className="block border-b-[2px] text-text-gray pl-0 border-t-transparent border-l-transparent border-r-transparent focus:border-r-transparent focus:border-t-transparent border-[rgba(145,229,246,1)] focus:border-l-transparent focus:ring-0 py-[2px] text-[14px] font-poppins w-full"
      >
        <option defaultChecked disabled selected>
          Select Gender
        </option>

        <option value={"male"}>Male</option>
        <option value={"female"}>Female</option>
        <option value={"non-binary"}>Non Binary</option>
      </select>
    </div>
  );
};
export default Select;
