import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";
const Layout = ({ color, children }) => {
  const bg = color;
  return (
    <div className={`bg-[${color}]`}>
      <div className="fixed left-0 md:bottom-[-1rem] z-10  bottom-[-5rem] ">
        <Image src="/icons/circleLeft.svg" alt="" width={252} height={184} />
      </div>
      <div
        className={` w-screen  relative h-screen`}
        style={{ backgroundColor: color }}
      >
        <div className="fixed z-10 right-[0] w-[164] h-[185px] ">
          <Image src="/icons/circleRight.svg" alt="" width={164} height={185} />
        </div>
        <div className=" grid place-items-center container mx-auto font-poppins relative ">
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
};
export default Layout;
