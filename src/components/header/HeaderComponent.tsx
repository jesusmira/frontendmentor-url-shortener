import { useState } from "react";

export const HeaderComponent = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <header className="relative flex  justify-between xl:justify-start items-center xl:gap-2  py-10 xl:py-14 px-6 xl:px-36 ">
          {/* logo */}
          <a href="#" className="p-1.5 mt-1">
            <span className="sr-only">Shortly</span>
            <img className="max-w-[113%]" src="images/logo.svg" alt="" />
          </a>
          {/* button sh */}
        <div className="flex xl:hidden">
          <button type="button" 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            
            <svg className={`h-8 w-8 ${isOpen ? ("hidden") : ("flex")}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className={`h-8 w-8 ${isOpen ? ("flex") : ("hidden")}`} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>           
          </button>
        </div>
        
        <nav className={`absolute xl:static top-20  right-5 left-5 w-[343px] xl:w-full text-base py-6 px-5 xl:p-0 xl:bg-transparent bg-primary-darkVoilet  rounded-xl flex flex-col xl:flex-row items-center xl:justify-between text-white xl:text-neutral-grayishViolet xl:scale-100 xl:translate-x-0 xl:translate-y-0 transition-all  ${
        isOpen
          ? "animate-fade-in-down "
          : "scale-0 translate-x-36 -translate-y-48"
      }`}>        
            {/* menuItem1 */}
            <div className="flex flex-col xl:flex-row items-center pb-5 xl:p-0">
                <a href="#" className=" inline-block py-3 px-4 font-semibold hover:text-gray-900">Features</a>
                <a href="#" className=" inline-block py-3 px-4 font-semibold hover:text-gray-900">Pricing</a>
                <a href="#" className=" inline-block py-3 px-4 font-semibold hover:text-gray-900">Resources</a>       
            </div>
          {/* menuItem2 */}
            <div className="flex flex-col xl:flex-row  w-full xl:w-auto items-center pt-7 pb-3 xl:p-0 xl:border-none border-t border-solid border-gray-600  gap-3 ">
                <a href="#" className=" inline-block py-3 px-4 font-semibold hover:text-gray-900">Login</a>
                {/* boton signUp */}
                <button className=" btn py-3 px-8 w-full xl:w-max btn-rounded-max hover:bg-cyan-300 ">
                    Sign Up
                </button>
            </div>
        </nav>
    </header>
  )
}
