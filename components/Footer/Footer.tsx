import React from "react";
import FooterService from "./FooterService";
import { aboutUs } from "@/utils/footer/aboutUs";
import { forStudents } from "@/utils/footer/forStudents";
import { forTutors } from "@/utils/footer/forTutors";
import { forCompanies } from "@/utils/footer/forCompanies";
import { AiOutlineArrowUp } from "react-icons/ai";
import AddtionalServices from "./AddtionalServices";
import MoreLanguages from "./MoreLanguages";
import { BsDot } from "react-icons/bs";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <footer className="w-full relative">
      <div className="bg-[#384047] w-full p-10">
        <div className="max-w-[1290px] mx-auto ">
          <div className="flex gap-12 flex-col ">
            <div className="grid grid-cols-4 gap-9">
              <div>
                <FooterService type="ABOUT US" options={aboutUs} />
              </div>
              <div>
                <FooterService type="FOR STUDENTS" options={forStudents} />
              </div>
              <div>
                <FooterService type="FOR TUTORS" options={forTutors} />
              </div>
              <div>
                <FooterService type="FOR COMPANIES" options={forCompanies} />
              </div>
            </div>
            <div className="bg-gray-100/20 h-[1px] w-full" />
            <AddtionalServices />
          </div>
        </div>
      </div>

      <div className="bg-[#27E0F6] flex cursor-pointer  text-3xl justify-center rounded-full shadow-md items-center shrink-0 h-14 w-14  grow-0 absolute right-8 bottom-[65rem]">
        <AiOutlineArrowUp />
      </div>

      <div className="bg-[#32393F] w-full p-10">
        <div className="max-w-[1290px] mx-auto">
          <div className="flex flex-col gap-10">
            <MoreLanguages />
            <div className="grid grid-cols-4 gap-9">
              <p className="font-semibold text-white"> &copy; 2012-2023 Preply Inc.</p>
              <div className="flex items-center gap-2 col-span-3">

                <p className="text-white text-xs">Legal Center</p>
                <BsDot className="text-gray-300/40"/>
                <p className="text-white text-xs">Privacy Policy</p>
                <BsDot className="text-gray-300/40"/>
                <p className="text-white text-xs">Cookie Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
