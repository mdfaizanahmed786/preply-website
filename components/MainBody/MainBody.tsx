import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import Tutor from './Tutor/Tutor'
import Resume from './Resume/Resume'
import Subjects from './Subjects/Subjects'
import MoreInstructors from './MoreInstructors/MoreInstructors'
import AboutTutor from '../HeroSection/AboutTutor'
import MoreTutors from './MoreTutors/MoreTutors'
interface MainBody{}

const MainBody: React.FC<MainBody> = () => {
  return (
    <div className="max-w-[1100px] mx-auto justify-between flex gap-8  ">
    <div className="flex-1">
      <HeroSection />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Tutor />
          <Resume />
          <Subjects />
        </div>
        <MoreInstructors />
        <MoreTutors/>
      </div>
    </div>
    <AboutTutor />
  </div>
  )
}

export default MainBody