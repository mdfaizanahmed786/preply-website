import React from "react";

interface OutlineButton {
  tutorBtn: boolean;
  text: string;
  Icon?: React.ElementType;
}

const OutlineButton = ({ tutorBtn, text, Icon }: OutlineButton) => {
  return (
    <div className={`ring-primary ring-1 text-primary ${tutorBtn ? "rounded-xl px-4 py-3" : "px-2 py-1"} cursor-pointer  w-full flex items-center gap-4 justify-center whitespace-nowrap`}>
      {Icon && <Icon className="h-6 w-6 mr-2" />}

      <p>{text}</p> 
    </div>
  );
};

export default OutlineButton;
