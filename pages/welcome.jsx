import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import RadioInput from "../components/RadioInput";
import Button from "../components/Button";

const Welcome = () => {
  const [accoutType, setAccoutType] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    target.checked && setAccoutType(target.value);
  };

  useEffect(() => {
    handleChange;
  }, []);

  return (
    <Layout>
      <div className="h-screen grid place-items-center">
        <div className=" h-fit">
          <div className="grid place-items-center">
            <Image
              src="/icons/beepIcon.svg"
              alt="beeper logo"
              height={70}
              width={70}
            />
            <h1 className="mt-[18px] mb-[35px] text-coolBlue font-[500] text-[25px] leading-[35.85px]">
              Welcome
            </h1>
            <p className="font-poppins text-[19px] md:text-[20px] leading-[29.87px] text-center text-coolBlue">
              Who are you creating this account for?
            </p>
          </div>
          <div className="mt-[15px] w-full md:w-full  flex flex-col items-center">
            <div className="flex flex-col items-start w-[80%]">
              <RadioInput
                text="Yourself"
                id={"self"}
                checked={accoutType == "personal"}
                value="personal"
                handleChange={handleChange}
              />
              <RadioInput
                id="bussiness"
                value={"business"}
                text="To manage your business"
                checked={accoutType == "business"}
                handleChange={handleChange}
              />
            </div>
            <div className="md:my-[40px] w-full grid place-items-center ">
              <Button
                width={160}
                heigt={55}
                onclick={() =>
                  accoutType === "personal"
                    ? (window.location.href = "/personal")
                    : accoutType === "business"
                    ? (window.location.href = "/business")
                    : ""
                }
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
