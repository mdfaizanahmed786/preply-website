import React from 'react'

interface AboutTutor{}

const AboutTutor = (props: AboutTutor) => {
  return (
    <div className='flex flex-col h-1/2 shadow-md space-y-5 sticky '>
<iframe width="350" height="200"
src="https://www.youtube.com/embed/_nBMZY5SBiQ">
</iframe>
<div className='p-4'>

<div className='flex justify-between items-center'>
<div className='bg-green-200 text-green-700 px-2 w-1/4 ml-4 text-center py-1 rounded-md '>
Newly Joined
</div>
<div className='flex flex-col gap-2'>
<div className='flex items-center gap-1'>
    <p className='text-lg'>1242</p>
    <p className='text-sm'>INR</p>
</div>
<div className='text-gray-500 text-sm'>
    50-min lession
</div>
</div>

</div>
</div>
    </div>
  )
}

export default AboutTutor
