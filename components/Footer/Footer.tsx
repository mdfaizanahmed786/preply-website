import React from "react";
import FooterService from "./FooterService";
import { aboutUs } from "@/utils/footer/aboutUs";
import { forStudents } from "@/utils/footer/forStudents";
import { forTutors } from "@/utils/footer/forTutors";
import { forCompanies } from "@/utils/footer/forCompanies";
import { AiOutlineArrowUp } from "react-icons/ai";
import AddtionalServices from "./AddtionalServices";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <footer className="w-full relative">
      <div className="bg-[#384047] w-full p-10">
        <div className="max-w-[1100px] mx-auto ">
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

      <div className="bg-[#27E0F6] flex  text-3xl justify-center rounded-full shadow-md items-center shrink-0 h-16 w-16  grow-0 absolute right-8 bottom-[41rem]">
        <AiOutlineArrowUp />
      </div>
    </footer>
  );
};

export default Footer;
