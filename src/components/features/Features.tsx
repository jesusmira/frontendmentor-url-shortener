import { Feature } from "./Feature"

export const Features = () => {

  const data = [
    {
      icon: "./images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      icon: "./images/icon-detailed-records.svg",
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      top: "xl:top-12"
    },
    {
      icon: "./images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      top: "xl:top-24"
    },
]

  return (
    <section className='flex flex-col xl:flex-row px-6  xl:px-32  justify-evenly gap-20 xl:gap-6 text-left py-24 xl:pb-48 relative'>
        {
          data.map((item, index) => (
            <Feature key={index} {...item} />
          ))
        }
        
        <span className='absolute  bg-primary-cyan w-2.5 xl:w-2/3 h-2/4 xl:h-2.5 -z-10 left-[48.5%] xl:left-48 xl:top-[49.5%]'></span>
    </section>
  )
}
