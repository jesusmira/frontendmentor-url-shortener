import { useState } from 'react';
import { UrlLink } from './UrlLink';
import { UrlApi } from './UrlApi';
type Link ={
    url: string;
    link: string;
}

export const UrlShorty = () => {

  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [links, setLinks] = useState<Link[]>([]);

  const isValidURL = (url:string) => {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

  const shortenLink = async(e:any) => {
    e.preventDefault();
    if (url.replaceAll(" ", "") === "" || !isValidURL(url)) {
      setError(true);
      return;
    }
    const result = await UrlApi(url);
    setLinks([{url:url, link:result.result_url}, ...links] );
    setUrl("");
  }


  return (
    <section className="-mt-24 xl:-mt-20 px-6  xl:px-36 ">
        <form onSubmit={shortenLink}>
            <div className='url-short flex flex-col xl:flex-row xl:gap-5 rounded-lg py-8 px-6 xl:py-10 xl:px-12'>
                <div className="relative w-full ">
                  <input 
                      type="text"
                      id='url'
                      name='url'
                      value={url}
                      onFocus={() => setError(false)}
                      onChange={(e) => setUrl(e.target.value)} 
                      placeholder="Shorten a link here..." className={`w-full py-2 xl:py-3 px-3 xl:px-5 text-base xl:text-lg rounded-lg border-4 border-solid focus:border-primary-cyan focus:outline-none   
                      ${error ? "placeholder:text-secondary-red border-secondary-red" : "border-transparent"}`}/> 
                  <span className={` absolute text-sm text-secondary-red italic w-max left-2 -bottom-6
                      ${error ? "block" : "hidden"}`}> 
                    Please add a link
                  </span> 
                </div>
                <button className='btn py-3 xl:py-4 w-full rounded-lg mt-9 xl:mt-0 xl:w-52  hover:bg-cyan-300'>Shorten It!</button>        
            </div>
        </form>
        {/* Result Link */}
        {
          links.length > 0 &&
          links.map((link, index) => (
            <UrlLink key={index} data={link}/>
          ))
        }
        
    </section>
  )
}
