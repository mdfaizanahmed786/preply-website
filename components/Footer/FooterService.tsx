import React from "react";

interface FooterService {
  type: string;
  options: string[];
}

const FooterService: React.FC<FooterService> = ({ options, type }) => {
  return (
    <div className="flex gap-4 flex-col items-start">
      <p className=" text-white">{type}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <p className="text-white text-sm hover:underline cursor-pointer" key={option}>
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterService;
