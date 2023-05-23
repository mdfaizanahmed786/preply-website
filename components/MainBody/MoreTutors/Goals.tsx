import OutlineButton from "@/components/Button/OutlineButton";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

interface Goals {}

const Goals: React.FC<Goals> = () => {
  return (
    <div className="flex flex-col gap-5 items-start">
      <p className="text-lg">
        Find the best Japanese tutor for your learning goals
      </p>
      <div className="flex gap-4 items-center">
        <RxDotFilled className="h-2 w-2 text-gray-500" />
        <OutlineButton tutorBtn={false} text="JLPT Online" />
        <OutlineButton tutorBtn={false} text="Conversational Japanese tutors" />
        <OutlineButton tutorBtn={false} text="Japanese tutors for beginners" />
      </div>
    </div>
  );
};

export default Goals;
