import React from "react";

interface Subject {
  title: string;
  description: string;
}

const Subject: React.FC<Subject> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-[1px] bg-gray-200" />
      <div className="font-bold">{title}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
};

export default Subject;
