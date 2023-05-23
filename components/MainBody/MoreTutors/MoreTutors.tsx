import React from "react";
import TutorLocation from "./TutorLocation";


interface MoreTutors {}

const MoreTutors: React.FC<MoreTutors> = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Check more tutors who teach Japanese</p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <TutorLocation location="Japanese tutors in Starkville, MS" />
          <TutorLocation location="Japanese tutors in Carmel, IN" />
        </div>
        <div className="flex gap-2 ml-3">
          <TutorLocation location="Japanese tutors in Renvo, NV" />
          <TutorLocation location="Japanese tutors in Red Deer" />
        </div>
        <div className="flex gap-2 ml-3">
          <TutorLocation location="Japanese tutors in Cranberry Township, Pa" />
          <TutorLocation location="Japanese tutors in Story Brook, NY" />
        </div>


      </div>
    </div>
  );
};

export default MoreTutors;
