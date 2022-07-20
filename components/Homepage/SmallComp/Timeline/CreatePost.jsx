import React, { useEffect, useState } from "react";

//
import Picker from "emoji-picker-react";

// custom components
import ProfilePic from "./ProfilePic";

import { post } from "../../../../test/notification";

const CreatePost = () => {
  const [emoji, setEmoji] = useState(false);
  const [input, setInput] = useState("");

  const pickEmoji = (e, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setEmoji(false);
  };
  useEffect(() => {
    beep;
  }, [post]);

  const beep = async () => {
    post.push({
      name: "Jane",
      username: "@janedoe",
      post: input,
      time: "5m",
      img: "/profile/Ellipse 8.png",
    });
    setInput("");
    console.log("dhfjkhajk");
  };

  return (
    <div className="grid place-items-center py-[12px]">
      <div className="w-[90%] grid place-items-center">
        <div className="flex gap-[5px] w-full">
          <ProfilePic img="/profile/Ellipse 8.png" />
          <textarea
            name=""
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="post"
            className="min-h-[100px] w-full text-[18px] leading-[27px] font-[500] resize-none border-transparent focus:border-transparent focus:outline-transparent focus:ring-0"
            placeholder="What's going on?"
          ></textarea>
        </div>

        {/* Icons */}
        <div className="flex justify-between w-[80%] mt-[10px] relative">
          <div className="flex gap-[10px]">
            <div>
              <label htmlFor="img-file" className="cursor-pointer">
                <img src="/icons/image-icon.svg" alt="" className="" />
              </label>
              <input
                type="file"
                hidden
                id="img-file"
                accept="img/jpg, img/jpeg, img/png"
                className="image gallery icon"
              />
            </div>

            <div className="">
              <label htmlFor="gif-file" className="cursor-pointer">
                <img src="/icons/gif.svg" alt="gif icon" />
              </label>
            </div>

            <div>
              <label
                htmlFor=""
                className="cursor-pointer"
                onClick={() => {
                  setEmoji(!emoji);
                }}
              >
                <img src="/icons/emoji-smile.svg" alt="smile icon" />
              </label>
            </div>

            <div>
              <label htmlFor="" className="cursor-pointer">
                <img src="/icons/location.svg" alt="" />
              </label>
            </div>
          </div>
          <button
            onClick={beep}
            className="w-[64px] h-[40px] rounded-[10px] bg-coolBlue text-[20px] leading-[30px] font-[500] text-white"
          >
            Beep
          </button>
        </div>
        {emoji && (
          <Picker
            onEmojiClick={pickEmoji}
            disableSkinTonePicker={false}
            pickerStyle={{
              position: "absolute",
              top: "13rem",
              left: "-4rem",
              zIndex: 10,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CreatePost;
