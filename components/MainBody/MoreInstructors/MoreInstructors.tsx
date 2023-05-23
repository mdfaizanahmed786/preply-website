import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface MoreInstructors {}

const MoreInstructors: React.FC<MoreInstructors> = () => {
  return (
    <div className="flex gap-2 py-5 text-gray-600 items-center text-sm">
      <p className="text-gray-500">Find Tutors</p>
      <p className="text-gray-500">
        <MdKeyboardArrowRight className="text-gray-500" />
      </p>
      <p className="text-gray-500">Japanese Tutors online</p>
      <p>
        <MdKeyboardArrowRight />
      </p>
      <p className="text-gray-500">Yuki M.</p>
    </div>
  );
};

export default MoreInstructors;
