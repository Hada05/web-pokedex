import React from 'react'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-[3rem] font-extrabold text-shadow-sharp text-shadow-primary'>Welcome, Trainers !</h1>
        <h1 className='text-[2rem] opacity-75 font-normal'>Whatcha lookin' for?</h1>
      </div>
    </div>
  )
}
