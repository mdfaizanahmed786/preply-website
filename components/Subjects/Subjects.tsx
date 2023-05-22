import subjects from '@/utils/subjects'
import React from 'react'
import Subject from './Subject'

interface Subjects{}

const Subjects:React.FC<Subjects> = () => {
  return (
    <div className='flex flex-col gap-7 p-6 bg-white shadow-lg rounded-md '>
<div className="flex gap-9 items-center">
        <p className="font-bold">Subjects</p>
        <p className="underline decoration-primary underline-offset-8 flex-1">
          Japanese
        </p>
      </div>

      <div className='space-y-5'>
        {subjects.map(subject=>(
            <Subject key={subject.id} title={subject.title} description={subject.description}/>
        ))}
      </div>
    </div>
  )
}

export default Subjects