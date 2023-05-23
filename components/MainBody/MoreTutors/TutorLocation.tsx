import OutlineButton from "@/components/Button/OutlineButton";
import React from "react";
import { RxDotFilled } from "react-icons/rx";

interface TutorLocation {
  location: string;
}

const TutorLocation: React.FC<TutorLocation> = ({ location }) => {
  return (
    <div className="flex gap-2 items-center">
      <RxDotFilled className="h-2 w-2 text-gray-400" />
      <OutlineButton tutorBtn={false} text={location} />
    </div>
  );
};

export default TutorLocation;
