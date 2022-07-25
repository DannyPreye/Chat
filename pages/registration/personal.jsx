import React from "react";
import Image from "next/image";

import Layout from "../../components/Layout";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Remember from "../../components/form/Remember";
import FormButton from "../../components/form/FormButton";

const registration = () => {
  return (
    <Layout>
      <div className=" grid h-screen overflow-y-hidden  place-items-center">
        <div className=" grid place-items-center">
          <div className="grid place-items-center md:block w-[357px] mt-10 ">
            <div className="flex items-center gap-[0.5em]">
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
            <p className="font-[600] font-poppins text-[18px] leading-[22px] mt-[0.3em] text-coolBlue">
              Create your account
            </p>
          </div>
          <div className="grid place-items-center mt-[2px]">
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
            <Input
              type="text"
              date
              id="dob"
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth"
            />
            <Select label="Gender" id="gender" />
            <Input
              type="tel"
              id="phone"
              name="phone"
              label="Phone Number"
              placeholder="Phone number"
            />
            <Input
              type="email"
              id="email"
              name="email"
              label="Email Address"
              placeholder="Email"
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
    </Layout>
  );
};

export default registration;
