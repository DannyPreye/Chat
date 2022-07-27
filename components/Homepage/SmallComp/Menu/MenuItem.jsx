import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ Icon, content, link, notification }) => {
  const router = useRouter();

  return (
    <Link href={`${link}`} className=" ">
      <a
        className={`${
          router.pathname === link && "focus:text-coolBlue"
        } text-text-gray   cursor-pointer hover:text-coolBlue `}
      >
        <div className="flex gap-[5px] items-center ">
          <Icon className={`"w-[20px] h-[20px]   "`} />
          <p className="font-[500] leading-[35px] text-[16px] ">{content}</p>
        </div>
      </a>
    </Link>
  );
};

export default MenuItem;
