import { useState } from 'react'

export const UrlLink = ({data: {url, link}}: {data: {url: string, link: string}}) => {

  const [copied, setCopied] = useState(false);
  
  const copyLink = async () => {
    await navigator.clipboard.writeText(link);
    setCopied(true);
  };
  
  return (
    <div className='flex flex-col xl:flex-row xl:justify-between xl:items-center bg-white mt-6 text-base font-semibold rounded-lg'>
        <span className='break-words pt-4 pb-2 xl:py-0 px-6'>{url}</span>
        <div className='flex flex-col xl:flex-row xl:items-center border-t-2  py-4 px-6 xl:gap-4'>
          <span className='pb-3 xl:pb-0  text-primary-cyan' id='urlLink'>{link}</span>
          <button 
              onClick={copyLink}  
              className={`font-semibold py-2 rounded-lg text-white xl:w-20 xl:text-sm ${copied ? "bg-primary-darkVoilet" : "bg-primary-cyan"}`}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
    </div>
  )
}
