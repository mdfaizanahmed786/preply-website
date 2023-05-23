import React from "react";

interface ScheduleTimeLine {}

const ScheduleTimeLine: React.FC<ScheduleTimeLine> = () => {
  return <div className="flex flex-col gap-4">
    <div className="flex gap-2 items-center">
<div className="h-1 bg-gray-500 w-full"/>
<div className="timeline"/>
<div className="timeline"/>
<div className="timeline"/>
<div className="timeline"/>
<div className="timeline"/>
<div className="timeline"/>
    </div>
    <div>

    </div>
    <div>

    </div>
  </div>;
};

export default ScheduleTimeLine;
