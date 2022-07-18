import React from "react";
import Link from "next/link";
import { AiOutlineCloudUpload } from "react-icons/ai";
import FormButton from "../../components/form/FormButton";

import IconCard from "../../components/IconCard";

const businessCreden = () => {
  return (
    <IconCard heading={"Upload Your Business Credentials"}>
      <div className="grid place-items-center relative">
        <input
          type="text"
          placeholder="Select document"
          disabled
          className="w-[395px] h-[45px] rounded-[5px] "
        />
        <form method="POST" className=" ">
          <div className="flex justify-between mt-[15px] w-[395px] h-[45px] rounded-[5px] ">
            <p className="font-[600] text-[12px] text-text-gray">
              JPG, JPEG or PNG only <br /> (Max, 500KB)
            </p>
            <label
              htmlFor="file"
              className="w-[120px] h-[45px] bg-[#D9D9D9] rounded-[5px] grid place-items-center text-[12px] leading-[13.12px] font-[500] font-poppins"
            >
              Chose File
            </label>
            <input
              type="file"
              id="file"
              multiple
              hidden
              accept="image/png, image/jpg, image/jpeg"
            />
          </div>
          <div className="grid place-items-center">
            <button
              type="submit"
              className="w-[200px] h-[50px] gap-[5px] mt-[25px] mb-[20px] text-gray flex justify-center items-center bg-coolBlue rounded-[5px] font-poppins font-[600] text-[15px] leading-[20px]"
            >
              {" "}
              Upload <AiOutlineCloudUpload className="w-[20px] h-[15.71px]" />
            </button>
          </div>
        </form>
        <FormButton text={"Sign up"} />
        <p className="mt-[10px] text-center font-[600] text-[14px] leading-[16px]">
          Have an account?{" "}
          <Link href="/welcome">
            <span className="text-coolBlue cursor-pointer">Sign in</span>
          </Link>
        </p>
        <p className="absolute bottom-[-8rem] right-[-8rem] font-[600] text-coolBlue text-[15px] mb-[84px]">
          <Link href="/registration/username"> Skip</Link>
        </p>
      </div>
    </IconCard>
  );
};

export default businessCreden;
