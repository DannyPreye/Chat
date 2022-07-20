import React from "react";

// next component
import Image from "next/image";

const Menu = ({ src, name, username, alt }) => {
  console.log(src);
  return (
    <div className="flex mb-5 gap-[5px]">
      <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
        <img src={src} width={60} height={60} alt={alt} />
      </div>
      <div>
        <h4 className="text-[16px] leading-[30px] font-[500]">{name}</h4>
        <p className="text-[16px] leading-[30px] font-[500] text-text-gray">
          {username}
        </p>
      </div>
    </div>
  );
};

export default Menu;
