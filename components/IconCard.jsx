import React from "react";
import Layout from "./Layout";

import Image from "next/image";

const IconCard = ({ children, heading }) => {
  return (
    <Layout>
      <div className="h-screen grid place-items-center">
        <div className="h-fit ">
          <div className="grid place-items-center">
            <Image
              src="/beeperchat/Asset1.svg"
              alt="beeper logo"
              height={70}
              width={70}
            />
            {heading && (
              <h1 className=" my-[30px] text-coolBlue font-[500] text-[25px] leading-[30.85px]">
                {heading}
              </h1>
            )}
            <div className="container mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IconCard;
