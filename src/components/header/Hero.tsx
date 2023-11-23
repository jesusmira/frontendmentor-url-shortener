
export const Hero = () => {

  const data = {
    title: "More than just shorter links",
    description: "Build your brand’s recognition and get detailed insights on how your links are performing.",
    button: "Get Started",
  };

  return (
    <section className='flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center overflow-hidden px-6 xl:px-36  gap-6 md:gap-16 xl:gap-0 pb-32'>
        <div className='flex flex-col items-center xl:items-start xl:w-[60%] xl:-mt-6'>
            <p className='text-[2.5rem] leading-[2.7rem] xl:text-[4.1rem] xl:leading-[1.10] font-bold text-center xl:text-left text-neutral-veryDarkViolet'>
              {data.title}
            </p>
            <p className="text-neutral-grayishViolet font-medium text-lg xl:text-[1.3rem] xl:leading-8 text-center xl:text-left xl:w-[500px] mt-2">
              {data.description}
            </p>
            <button className='btn py-3 px-12 xl:px-8 rounded-full text-xl hover:bg-cyan-300 mt-8'>
              {data.button}
            </button>
        </div>
        <div className="w-[145%] xl:w-[40%] xl:ml-24">
            <img src="images/illustration-working.svg" alt="working" className="xl:max-w-2xl"/>
        </div>
    </section>
  )
}
