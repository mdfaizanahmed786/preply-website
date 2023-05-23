import React from "react";
import FilledButton from "../Button/FilledButton";
import { BsFillLightningChargeFill } from "react-icons/bs";
import OutlineButton from "../Button/OutlineButton";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import Popularity from "./Popularity";

interface AboutTutor {}

const AboutTutor = (props: AboutTutor) => {
  return (
    <div className=" flex flex-col gap-2 sticky top-10 h-[70rem] bottom-64 ">
      <div className="flex flex-col bg-white shadow-md rounded-md space-y-6 w-fit">
        <iframe
          width="350"
          height="200"
          src="https://www.youtube.com/embed/_nBMZY5SBiQ"
        ></iframe>
        <div className="p-4 space-y-5">
          <div className="flex justify-between items-center">
            <div className="bg-green-200 text-green-700 px-2 w-1/4 ml-4 text-center py-1 rounded-md ">
              Newly Joined
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <p className="text-lg">1242</p>
                <p className="text-sm">INR</p>
              </div>
              <div className="text-gray-500 text-sm">50-min lession</div>
            </div>
          </div>
          <div className="space-y-4">
            <FilledButton
              text="Book Trial Lesson"
              Icon={BsFillLightningChargeFill}
            />
            <OutlineButton
              text="Send Message"
              tutorBtn={true}
              Icon={HiOutlineMail}
            />
            <OutlineButton
              text="Save to my list"
              tutorBtn={true}
              Icon={AiOutlineHeart}
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="bg-white ring-primary ring-2 w-2 h-2 rounded-full" />
            <p className="text-gray-500 text-sm">
              Usually responds in less than an hour
            </p>
          </div>
        </div>
      </div>
      
      <Popularity/>
    </div>
  );
};

export default AboutTutor;
