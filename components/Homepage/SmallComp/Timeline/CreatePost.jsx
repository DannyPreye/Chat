import React from "react";
import ProfilePic from "./ProfilePic";

const CreatePost = () => {
  return (
    <div className="grid place-items-center py-[12px]">
      <div className="w-[90%] grid place-items-center">
        <div className="flex gap-[5px] w-full">
          <ProfilePic img="/profile/Ellipse 8.png" />
          <textarea
            name=""
            id="post"
            className="min-h-[100px] w-full text-[18px] leading-[27px] font-[500] border-transparent focus:outline-transparent focus:ring-0"
            placeholder="What's going on?"
          ></textarea>
        </div>

        {/* Icons */}
        <div className="flex justify-between w-[80%] mt-[10px]">
          <div className="flex gap-[10px]">
            <div>
              <label htmlFor="img-file">
                <img src="/icons/image-icon.svg" alt="" className="" />
              </label>
              <input
                type="file"
                hidden
                id="img-file"
                accept="img/jpg, img/jpeg, img/png"
                className=""
              />
            </div>

            <div className="">
              <label htmlFor="gif-file">
                <img src="/icons/gif.svg" alt="" />
              </label>

              <input type="file" hidden id="gif-file" accept="img/gif" />
            </div>

            <div>
              <label htmlFor="gif-file">
                <img src="/icons/emoji-smile.svg" alt="" />
              </label>
            </div>

            <div>
              <label htmlFor="gif-file">
                <img src="/icons/location.svg" alt="" />
              </label>
            </div>
          </div>
          <button className="w-[64px] h-[40px] rounded-[10px] bg-coolBlue text-[20px] leading-[30px] font-[500] text-white">
            Beep
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
