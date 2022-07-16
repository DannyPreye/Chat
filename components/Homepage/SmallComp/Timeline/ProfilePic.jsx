import React from "react";
import Image from "next/image";
const ProfilePic = ({ img }) => {
  return (
    <div className="w-[60px] h-[50px] rounded-full overflow-hidden">
      <Image src={img} width={50} height={50} alt="profile" />
    </div>
  );
};

export default ProfilePic;
