import { SocialIcons } from "./SocialIcons"

export const ListMenu = () => {
    const data = {
        titles: ['Features', 'Resources', 'Company'],
        items: [
            ['Link Shortening', 'Branded Links', 'Analytics'],
            ['Blog', 'Developers', 'Support'],
            ['About', 'Our Team', 'Careers', 'Contact']
            ]
    }
  return (
    <section className="flex flex-col xl:flex-row gap-6 items-center xl:items-start xl:gap-20">
        {data.titles.map((title, index) => (
            <div key={index} className="text-center xl:text-left flex flex-col gap-6">
                <h3 className="text-base font-bold">{title}</h3>
                <ul className="flex flex-col gap-2 text-neutral-grayishViolet">
                {data.items[index].map((item, index) => (
                    <li key={index} className="font-medium hover:text-white"><a href="#">{item}</a></li>
                ))}
                </ul>
            </div>
        ))}
        <SocialIcons/>
    </section>
  )
}
