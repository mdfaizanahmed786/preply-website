import React from "react";

interface MoreLanguages {}

const MoreLanguages: React.FC<MoreLanguages> = () => {
  return (
    <div className="grid grid-cols-4 gap-9">
      <div className="flex flex-col gap-2">
        <p className="text-white text-sm">LEARN</p>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Learn English online</p>
            <p className="text-xs text-white">Learn Spanish online</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Learn French online</p>
            <p className="text-xs text-white">Learn another lanugaue</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-sm">ONLINE LANGUAGE CLASSES & COURSES</p>

        <div className="flex flex-col gap-1">
          <p className="text-xs text-white">Online English classes</p>

          <p className="text-xs text-white">Business English Courses</p>
          <p className="text-xs text-white">Online Spanish Courses</p>
          <p className="text-xs text-white">Online German Courses</p>
          <p className="text-xs text-white">Online Chinese Courses</p>
          <p className="text-xs text-white">Online Japanese Courses</p>
          <p className="text-xs text-white">Online Turkish Courses</p>
          <p className="text-xs text-white">Online French Courses</p>
          <p className="text-xs text-white">Online Portuguese Courses</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Online Polish Courses</p>
            <p className="text-xs text-white">Online Arabic Courses</p>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Online Russian Courses</p>
            <p className="text-xs text-white">Online Italian Courses</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-white text-sm">1-ON-1 TUTORS</p>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">English Tutors</p>
            <p className="text-xs text-white">Spanish Tutors</p>
            <p className="text-xs text-white">French Tutors</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">German Tutors</p>
            <p className="text-xs text-white">Arabic Tutors</p>
            <p className="text-xs text-white">Math Tutors</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Japanese Tutors</p>
            <p className="text-xs text-white">Chinese Tutors</p>
          </div>
          <div>
            <p className="text-xs text-white">Portugese tutors</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-white text-sm">TUTORS NEAR YOU</p>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Tutors in NYC</p>
            <p className="text-xs text-white">Tutors in Los Angeles</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Learn Tutors in Toronto</p>
            <p className="text-xs text-white">Tutors in London</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-white">Learn Tutors in Sydney</p>
            <p className="text-xs text-white">Tutors abroad</p>
          </div>
          <div>
            <p className="text-xs text-white">Tutors by city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreLanguages;
