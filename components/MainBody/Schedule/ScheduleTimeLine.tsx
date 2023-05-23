import React from "react";

interface ScheduleTimeLine {}

const ScheduleTimeLine: React.FC<ScheduleTimeLine> = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="h-1 bg-gray-500 w-full" />
        <div className="timeline" />
        <div className="timeline" />
        <div className="timeline" />
        <div className="timeline" />
        <div className="timeline" />
        <div className="timeline" />
      </div>
      <div className="flex gap-2 items-start w-full">
        <div className="date-style">
          <p>Tue</p>
          <p>23</p>
        </div>
        <div className="date-style">
          <p>Wed</p>
          <p>24</p>
          <div className="flex gap-2 flex-col mt-5">
            <p className="text-primary">12:30</p>
            <p className="text-primary">13:00</p>
            <p className="text-primary">13:30</p>
            <p className="text-primary">14:00</p>
            <p className="text-primary">14:30</p>
            <p className="text-primary">15:00</p>
          
          </div>
        </div>
        <div className="date-style">
          <p>Thu</p>
          <p>25</p>
          <div className="flex gap-2 flex-col mt-5">
            <p className="text-primary">16:00</p>
            <p className="text-primary">16:30</p>
            <p className="text-primary">17:00</p>
            <p className="text-primary">17:30</p>
            <p className="text-primary">18:00</p>
            <p className="text-primary">18:30</p>
            <p className="text-primary">19:00</p>
          </div>
        </div>
        <div className="date-style">
          <p>Fri</p>
          <p>26</p>
        </div>
        <div className="date-style">
          <p>Sat</p>
          <p>27</p>
        </div>
        <div className="date-style">
          <p>Sun</p>
          <p>28</p>
        </div>
        <div className="date-style">
          <p>Mon</p>
          <p>29</p>
          <div className="flex gap-2 flex-col mt-5">
            <p className="text-primary">10:00</p>
            <p className="text-primary">10:30</p>
            <p className="text-primary">11:00</p>
            <p className="text-primary">11:30</p>
            <p className="text-primary">12:00</p>
            <p className="text-primary">12:30</p>
            <p className="text-primary">13:00</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ScheduleTimeLine;
