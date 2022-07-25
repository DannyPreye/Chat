import React from "react";

const Trending = ({ trending, topic, beeps }) => {
  return (
    <div className="grid gap-[3px] py-[10px] border-b-[0.03px] border-[#D9D9D9]">
      <h5 className="text-[13px] leading-[19.5px] text-text-gray">
        Trending in {trending}
      </h5>
      <div className="flex justify-between items-center">
        <h3 className="font-[500] text-[16px] leading-[24px]">{topic}</h3>
        <div className="flex gap-[4px] cursor-pointer">
          {[1, 2, 3].map((icon) => {
            return (
              <img
                src="/icons/Ellipse 11.svg"
                alt=""
                key={icon}
                className="w-[5px] h-[5px]"
              />
            );
          })}
        </div>
      </div>
      <p className="text-[13px] leading-[19.5px] text-text-gray">
        {beeps} beeps
      </p>
    </div>
  );
};

export default Trending;
