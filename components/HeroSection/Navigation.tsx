import React, { useState } from 'react'

interface Navigation{}

const Navigation = (props: Navigation) => {
  const [active, setActive]=useState(false)
  return (
    <div className='flex gap-5 items-center py-3'>
       <ul className='list-none flex items-center gap-7'>
        <li className='cursor-pointer underline decoration-primary underline-offset-8'>About</li>
        <li className='cursor-pointer'>Schedule</li>
        <li className='cursor-pointer'>Resume</li>
        <li className='cursor-pointer'>Subject</li>
       </ul>
    </div>
  )
}

export default Navigation