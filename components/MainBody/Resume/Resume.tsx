import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface Resume {}

const Resume: React.FC<Resume> = () => {
  return (
    <div className="flex flex-col gap-7 p-6 bg-white shadow-lg rounded-md">
      <div className="flex gap-9 items-center">
        <p className="font-bold">Resume</p>
        <p className="underline decoration-primary underline-offset-8 flex-1">
          Education
        </p>
      </div>
      <div className="w-full h-[1px] bg-gray-200" />
      <div className="flex gap-9 items-center">
        <p className="text-gray-600">2011-2017</p>
        <div className="flex-1 flex flex-col gap-1">
          <p className="text-gray-600">
            International University of Health and Welfare Bachelors degree in
            Pharmacology
          </p>
          <div className="flex gap-2 items-center">
            <AiFillCheckCircle className="h-5 w-5 text-green-400" />
            <p className="text-green-400 text-sm">Diploma Verified</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
