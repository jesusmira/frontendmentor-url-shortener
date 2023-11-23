interface FeatureProps {
  icon: string;
  title: string;
  text: string;
  top?:string;
}
export const Feature = ({ icon, title, text, top }: FeatureProps) => {

  return (
    <div className={`flex flex-col  gap-y-4  bg-white rounded-lg px-7 xl:pr-6 xl:pl-[1.9rem]  pb-10 relative items-center xl:items-start ${!!top ? top : "" }`}>
        <div className="bg-primary-darkVoilet w-24 h-24 -mt-11 items-center flex justify-center rounded-full mb-4">
          <img src={icon} alt={title} />
        </div>
        <h1 className="text-xl font-bold text-neutral-veryDarkBlue">
          {title}
        </h1>
        <p className="text-neutral-grayishViolet text-base xl:text-sm  font-semibold  xl:leading-6 text-center xl:text-left">
          {text}
        </p>
    </div>

  )
}
