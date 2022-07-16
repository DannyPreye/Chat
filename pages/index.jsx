import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
const index = () => {
  return (
    <Layout>
      <div className="w-full h-screen grid place-items-center">
        <div className="w-[237px] h-[227] grid place-items-center">
          <Image
            src="/beeperchat/Asset1.svg"
            alt="beeper logo"
            height={150}
            width={150}
          />
          <h1 className="font-[600] font-poppins text-[40px] leading-[60px]  text-coolBlue">
            Beeperchat
          </h1>
        </div>
      </div>
    </Layout>
  );
};

export default index;
