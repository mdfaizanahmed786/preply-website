import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";

interface Schedule {}

const Schedule: React.FC<Schedule> = () => {
  return (
    <div className="flex flex-col gap-7 p-6 bg-white shadow-lg rounded-md ">
      <div>
        <p className="font-bold">Schedule</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 p-2 flex gap-2 items-center">
          <AiOutlineQuestionCircle className="h-3 w-3 text-gray-600" />
          <p className="text-gray-600 text-sm">
            Choose the time for your first lesson. The timings are displayed in
            your local timezone.
          </p>
        </div>

        <div className="flex items-center ">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex items-center gap-[1px]">
              <div className="flex h-9 w-9 items-center justify-center shrink-0 grow-0  ring-1 ring-gray-300">
                <IoIosArrowBack className="h-6 w-6 text-gray-300 cursor-not-allowed" />
              </div>
              <div className="h-9 w-9 flex items-center justify-center shrink-0 grow-0 bg-gray-100 ring-1 ring-gray-400">
                <IoIosArrowForward className="text-gray-400 h-6 w-6 hover:text-primary cursor-pointer" />
              </div>
            </div>
            <div>May 23–29, 2023</div>
          </div>

          
            <div className="flex ring-gray-300 px-4 cursor-pointer py-1 ring-1 items-center gap-2">
              <p className="flex-1 text-gray-400">Asia/Damascus GMT +3:00</p>
              <IoMdArrowDropdown className="text-gray-400 h-4 w-4" />
            </div>
        
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Schedule;
