import React from "react";

import Image from "next/image";

import Layout from "../../components/Layout";
import Input from "../../components/form/Input";
import Remember from "../../components/form/Remember";
import FormButton from "../../components/form/FormButton";

const business = () => {
  return (
    <Layout>
      <div div className=" h-screen  grid place-items-center">
        <div className="h-fit grid place-items-center">
          <div className=" mt-[0.3em] w-[357px]">
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/beeperIcon.png"}
                width={70}
                height={70}
                alt="beeper logo"
              />
              <h1 className="font-poppins font-[500] text-[30px] leading-[50px] text-coolBlue">
                Beeperchat
              </h1>
            </div>
            <p className="font-[600] font-poppins text-[18px] leading-[22px] mt-[15px] text-coolBlue">
              Create your business account
            </p>
          </div>
          <div className="grid place-items-center">
            <Input
              type="text"
              id="bname"
              name="bname"
              label="Business Name"
              placeholder="Business name"
            />

            <Input type="text" date id="dob" name="dob" label="Date of Birth" />

            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              placeholder="Enter your email"
            />
            <Input
              type="password"
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
            />
            <Input
              type="password"
              id="confirm_pass"
              name="confirm_pass"
              label="Confirm Password"
              placeholder="Re-enter Password"
            />
            <Remember reg />
            <div className="mb-[10px]">
              <FormButton text="Sign Up" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default business;
