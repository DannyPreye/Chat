import Link from "next/link";
import React from "react";
import AuthLayout from "../../components/AuthLayout";
import Button from "../../components/Button";
import PinInput from "../../components/PinInput";
const PhoneAuth = () => {
  return (
    <AuthLayout heading="OTP Authentication">
      <h3 className="font-[500] text-[18px] leading-[23.9px] text-center text-coolBlue">
        An authentication code has been sent to +234 803 875 527
      </h3>
      <div className="w-full grid place-items-center  mt-[20px]">
        <div className="flex gap-[20px]  justify-center w-[80%]">
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
    </AuthLayout>
  );
};

export default PhoneAuth;
