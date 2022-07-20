import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import Image from "next/image";

const authSuccess = () => {
  return (
    <AuthLayout heading={"Authentication Successful"}>
      <div className="w-fit h-fit grid place-items-center">
        <h3 className="font-[500] text-[15px] leading-[119.5%] text-coolBlue  text-center">
          Account successfully authenticated{" "}
        </h3>
        <div className="grid place-items-center my-[20px]">
          <Image
            src="/img/success.png"
            alt="success"
            height={150}
            width={150}
          />
        </div>
        <div className="grid place-items-center mt-[30px] mb-[70px]">
          <Button big>Next</Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default authSuccess;
