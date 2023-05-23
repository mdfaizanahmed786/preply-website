import React from "react";
import FooterService from "./FooterService";
import { aboutUs } from "@/utils/footer/aboutUs";
import { forStudents } from "@/utils/footer/forStudents";
import { forTutors } from "@/utils/footer/forTutors";
import { forCompanies } from "@/utils/footer/forCompanies";

interface Footer {}

const Footer: React.FC<Footer> = () => {
  return (
    <footer className="w-full">
      <div className="bg-[#384047] w-full p-10">
        <div className="max-w-[1100px] mx-auto ">
          <div className="flex gap-5 flex-col ">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
