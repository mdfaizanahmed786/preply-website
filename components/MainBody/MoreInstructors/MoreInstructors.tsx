import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface MoreInstructors {}

const MoreInstructors: React.FC<MoreInstructors> = () => {
  return (
    <div className="flex gap-2 py-5 text-gray-600 items-center text-sm">
      <p>Find Tutors</p>
      <p>
        <MdKeyboardArrowRight />
      </p>
      <p>Japanese Tutors online</p>
      <p>
        <MdKeyboardArrowRight />
      </p>
      <p>Yuki M.</p>
    </div>
  );
};

export default MoreInstructors;
