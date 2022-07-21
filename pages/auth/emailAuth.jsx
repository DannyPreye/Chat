import Link from "next/link";
import React, { useEffect, useRef } from "react";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import PinInput from "../../components/PinInput";

const emailAuth = () => {
  const inputs = useRef();
  const inputElements = [];
  // useEffect(() => {
  //   // work on this later
  //   inputElements = inputs.current.childNodes;
  //   const paste = () => {
  //     const nodes = [...inputElements];
  //     nodes.map((input) => console.log(input.placeholder));
  //   };
  //   paste();
  // }, [inputs]);

  return (
    <AuthLayout heading="OTP Authentication">
      <div className="h-fit ">
        <h3 className="font-[500] text-[18px] leading-[23.9px] text-center text-coolBlue">
          An authentication code has been sent to +234 803 875 5279
        </h3>
        <div className="w-full grid place-items-center  mt-[20px]">
          <div ref={inputs} className="flex gap-[20px]  justify-center w-[80%]">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <PinInput key={id} />
            ))}
          </div>
        </div>
        <p className="font-[400] text-[16px] text-coolBlue leading-[30px] mt-[20px] text-center">
          Didn’t get an OTP? <a cla>Resend code</a>
        </p>
        <div className="grid place-items-center mt-[40px] mb-[80px]">
          <Button big>Continue</Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default emailAuth;
