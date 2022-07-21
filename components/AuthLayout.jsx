import React from "react";
import Layout from "./Layout";
import Image from "next/image";

const AuthLayout = ({ children, heading }) => {
  return (
    <div className="">
      <div className="fixed bg-coolBlue top-0 left-0 h-full w-full"></div>
      <div className="fixed left-0  z-10 md:block hidden bottom-[-1rem] ">
        <Image src="/icons/authLeft.svg" alt="" width={252} height={184} />
      </div>
      <div className="fixed right-[0] w-[164] h-[185px] md:block hidden">
        <Image src="/icons/authRight.svg" alt="" width={164} height={185} />
      </div>
      <div
        className={` container  h-screen  mx-auto grid place-items-center relative `}
      >
        <div className="container  mx-auto grid place-items-center   md:mt-0 font-poppins relative ">
          <div className="min-w-[60%]   bg-cyan rounded-[20px]  grid place-items-center">
            <div className="grid h-fit place-items-center ">
              <div className="mt-[50px]">
                <Image
                  src="/beeperchat/Asset1.svg"
                  alt="beeper logo"
                  height={70.31}
                  width={93.44}
                />
              </div>
              <h1 className=" mt-[30px] mb-[10px] text-coolBlue font-[500] text-[22px] text-center leading-[30.85px]">
                {heading}
              </h1>
              <div className="gri">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
