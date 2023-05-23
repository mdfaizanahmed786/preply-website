import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface Schedule {}

const Schedule: React.FC<Schedule> = () => {
  return (
    <div className="flex flex-col gap-7 p-6 bg-white shadow-lg rounded-md ">
      <div>
        <p className="font-bold">Schedule</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-gray-100 p-2 flex gap-2 items-center">
          <AiOutlineQuestionCircle className="h-3 w-3 text-gray-600" />
          <p className="text-gray-600 text-sm">
            Choose the time for your first lesson. The timings are displayed in
            your local timezone.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Schedule;
