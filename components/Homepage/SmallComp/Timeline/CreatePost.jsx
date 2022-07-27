import React, { useEffect, useState } from "react";

//
import Picker from "emoji-picker-react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

// Framer motion
import {motion} from "framer-motion"

// custom components
import ProfilePic from "./ProfilePic";

import { post } from "../../../../test/notification";

// giphy

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const fetchGifs = (offset) => giphyFetch.trending({ offset, limit: 3 });

export const getServerSideProps = async () => {
  const { data } = await fetchGifs(0);
  return {
    props: {
      gifs: data,
    },
  };
};

const CreatePost = ({ gifs }) => {
  const [emoji, setEmoji] = useState(false);
  const [input, setInput] = useState("");
  const [gif, setGif] = useState(false);
  const [gifImage, setGifImage] = useState("");

  const pickEmoji = (e, emojiObject) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setEmoji(false);
  };

  useEffect(() => {
    beep;
  }, [post]);

  const beep = async () => {
    setInput("");
  };

  const gifSelected = (e, gif) => {
    setGifImage(e.images.original.url);
    setGif(false);
  };


  
  return (
    <div className="grid place-items-center py-[12px]r relative">
      <div className="w-[90%] grid place-items-center relative ">
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
        <div className="flex justify-between w-[80%] mt-[10px] pb-5 relative">
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
              <label
                htmlFor="gif-file"
                className="cursor-pointer"
                onClick={() => setGif(!gif)}
              >
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
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.8 }}
            onClick={beep}
            className="w-[64px] h-[40px] rounded-[20px] bg-coolBlue text-[12px]font-[500] text-white"
          >
            Beep
          </motion.button>
        </div>
        <div className=" w-full">
          {gifImage && <img src={gifImage} alt="" width={200} height={200} />}
        </div>
        <div className="relative">
          {emoji && (
            <Picker
              onEmojiClick={pickEmoji}
              disableSkinTonePicker={false}
              pickerStyle={{
                position: "absolute",
                top: "-8rem",
                left: "-4rem",
                zIndex: 10,
              }}
            />
          )}
          {gif && (
            <Grid
              width={200}
              initial={gifs}
              columns={3}
              gutter={6}
              fetchGifs={fetchGifs}
              noLink={true}
              onGifClick={gifSelected}
              className="absolute top-[3rem] bg-coolBlue z-10 w-[80%]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
