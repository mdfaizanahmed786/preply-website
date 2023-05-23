import React, { useState } from 'react'

interface Navigation{}

const Navigation = (props: Navigation) => {
  const [active, setActive]=useState('about')
  return (
    <div className='flex gap-5 items-center py-3 h-[48px] sticky top-0 z-40 mb-5 bg-white p-5'>
       <ul className='list-none flex items-center gap-7'>
        <li className={`cursor-pointer  ${active==='about' ? "decoration-primary underline-offset-8 underline" : "text-gray-500"}`} onClick={()=>setActive('about')}>About</li>
        <li className={`cursor-pointer  ${active==='schedule' ? "decoration-primary underline-offset-8 underline" : "text-gray-500" }`} onClick={()=>setActive('schedule')}>Schedule</li>
        <li className={`cursor-pointer  ${active==='resume' ? "decoration-primary underline-offset-8 underline" : "text-gray-500" }`} onClick={()=>setActive('resume')}>Resume</li>
        <li className={`cursor-pointer  ${active==='subject' ? "decoration-primary underline-offset-8 underline" : "text-gray-500" }`} onClick={()=>setActive('subject')}>Subject</li>
       </ul>
    </div>
  )
}

export default Navigation