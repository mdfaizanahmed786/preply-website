import React from 'react'
interface FilledButton{
  text:string;
  Icon?:React.ElementType
  size?:'small'|'large'
}

const FilledButton = ({Icon, text, size}: FilledButton) => {
  return (
    <div className={`bg-primary font-bold text-white rounded-xl px-4 cursor-pointer hover:bg-primary ${size==='small' ? "py-2" : "py-3"}   w-full flex items-center gap-4 justify-center`}>
      {Icon && <Icon className='text-yellow-500 mr-2 h-6 w-6'/>}
      
    <p>{text}</p> 
     </div>
  )
}

export default FilledButton