import React from "react";
import IconCard from "../components/IconCard";

import Input from "../components/form/Input";
import Remember from "../components/form/Remember";
import FormButton from "../components/form/FormButton";

const signIn = () => {
  return (
    <IconCard>
      <div className=" grid place-item">
        <div className="h-fit">
          <div>
            <h1 className="text-coolBlue font-[500] text-[25px] mt-5 leading-[30px]">
              Welcome Back
            </h1>
            <h3 className="font-[600] text-[15px] mt-1 leading-[21.51px] text-coolBlue">
              Let’s Sign You In!
            </h3>
          </div>
          <div className="mt-2">
            <Input
              type="text"
              id="username"
              name="username"
              label="Username"
              placeholder="janeDoe"
            />{" "}
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <Remember firstText="Remember Me" secondText="Forgot Password?" />
            <FormButton text="Sign In" />
            <p className="text-right font-[500] my-[20px] ">
              Don’t have an account?{" "}
              <span className="text-coolBlue">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </IconCard>
  );
};

export default signIn;
