import React from "react";
import Image from "next/image";
import { FaGraduationCap } from "react-icons/fa";
import { BsChatLeftDots } from "react-icons/bs";
import AboutTutor from "./AboutTutor";

interface HeroSection {}

const HeroSection = (props: HeroSection) => {
  return (
    <div className="bg-white py-7 w-full">
      <div className="flex items-start gap-36 w-full">
        <div className="flex gap-9 items-center  flex-1">
          <div className="relative">
            <Image
              src="https://avatars.preply.com/i/logos/i/logos/avatar_778ia4lolp3.jpg?d=160x160&f=webp"
              className="rounded-tr-md rounded-tl-3xl rounded-br-md rounded-bl-md  "
              alt="logo"
              width={170}
              height={170}
            />
            <div className="absolute h-3 w-3 bg-[#CFD7ED] rounded-full ring-2 ring-white bottom-3 left-7" />
          </div>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <p className="text-lg font-bold">Yuki. M</p>
                <div className="bg-red-500 w-2 h-2 rounded-full" />
              </div>
              <p className="text-base">
                Native Japanese speaker ready to meet your needs
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaGraduationCap className="text-gray-500 text-sm" />
                <p>Teaches Japanese lessons</p>
              </div>

              <div className="flex gap-2 items-center">
                <BsChatLeftDots className="text-gray-500 text-sm" />
                <div className="flex gap-1 items-center">
                  <p>
                    Speaks English{" "}
                    <span className="bg-[#D9FAFD] text-primary text-sm">
                      B2
                    </span>
                    .
                  </p>

                  <p>
                    Japanese{" "}
                    <span className="bg-green-200 text-green-400 text-sm">
                      Native
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutTutor />
      </div>
    </div>
  );
};

export default HeroSection;
