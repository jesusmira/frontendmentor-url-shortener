import React from 'react'

export const Advanced = () => {
    const data={
        title:"Advanced Statistics",
        description:"Track how your links are performing across the web with our advanced statistics dashboard.",
    }
  return (
    <section className='flex flex-col items-center text-center pt-20 pb-14 px-6 xl:before:px-36'>
        <h1 className='text-[1.7rem] xl:before:text-4xl font-bold pb-4'>{data.title}</h1>
        <p className='text-neutral-grayishViolet font-medium max-w-[480px]'> 
            {data.description} 
        </p>
    </section>
  )
}
