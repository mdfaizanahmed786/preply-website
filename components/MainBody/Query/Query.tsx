import React from 'react'

interface Query{}

const Query:React.FC<Query> = () => {
  return (
    <div className="bg-primary cursor-pointer flex text-white text-3xl justify-center rounded-full shadow-md items-center shrink-0 h-14 w-14  grow-0 fixed right-5 bottom-5">
    <p>?</p>
  </div>
  )
}

export default Query