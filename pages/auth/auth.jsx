import React, { useState, useEffect } from "react";
import Link from "next/link";

import AuthLayout from "../../components/AuthLayout";
import RadioInput from "../../components/RadioInput";
import Button from "../../components/Button";

const Auth = () => {
  const [authType, setAuthType] = useState("");

  const handleChange = (e) => {
    e.target.checked && setAuthType(e.target.value);
  };
  useEffect(() => {
    handleChange;
  }, []);

  return (
    <AuthLayout heading="Authenticate your Account">
      <div className="h-[310px] w-[675px]">
        <h3 className="font-[500] text-[30px] leading-[35.85px] text-center text-coolBlue">
          Select your preferred authentication method
        </h3>
        <div className="w-full grid place-items-center mt-[20px]">
          <div className="flex flex-col items-start w-[80%]">
            <RadioInput
              text="Email"
              id="email"
              color={"coolBlue"}
              borderColor="#386FA4"
              value="email"
              handleChange={handleChange}
            />
            <RadioInput
              text="Phone Number"
              id="phone"
              value="phone"
              color={"coolBlue"}
              borderColor="#386FA4"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="grid place-items-center mt-[30px] mb-[120px]">
          <Button big>
            <Link
              href={
                authType === "phone"
                  ? "/phoneAuth"
                  : authType === "email"
                  ? "/emailAuth"
                  : ""
              }
            >
              Next
            </Link>
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Auth;
