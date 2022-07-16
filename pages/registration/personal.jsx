import React from "react";
import Image from "next/image";

import Layout from "../components/Layout";
import Input from "../components/form/Input";
import Select from "../components/form/Select";
import Remember from "../components/form/Remember";
import FormButton from "../components/form/FormButton";

const registration = () => {
  return (
    <Layout>
      <div className=" grid h-screen  place-items-center">
        <div className=" grid place-items-center">
          <div className=" min-h-[703px] grid place-items-center">
            <div className="grid place-items-center md:block w-[357px] ">
              <div className="flex items-center gap-[2em]">
                <Image
                  src={"/beeperIcon.png"}
                  width={70}
                  height={70}
                  alt="beeper logo"
                />
                <h1 className="font-poppins font-[500] text-[36px] leading-[54px] text-coolBlue">
                  Beeperchat
                </h1>
              </div>
              <p className="font-[600] font-poppins text-[18px] leading-[27px] mt-[0.3em] text-coolBlue">
                Create your account
              </p>
            </div>
            <div className="grid place-items-center">
              <Input
                type="text"
                id="fname"
                name="fname"
                label="First Name"
                placeholder="First name"
              />
              <Input
                type="text"
                id="lname"
                name="lname"
                label="Last Name"
                placeholder="Last name"
              />
              <Input type="date" id="dob" name="dob" label="Date of Birth" />
              <Select label="Gender" id="gender" />
              <Input
                type="tel"
                id="phone"
                name="phone"
                label="Phone Number"
                placeholder="Your phone number"
              />
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
              <div className="mb-[100px]">
                <FormButton text="Sign Up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default registration;
