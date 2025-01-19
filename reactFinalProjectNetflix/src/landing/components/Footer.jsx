import {useState} from 'react'
import RandomSelect from './RandomSelect';
import language from '../../assets/icons/language.svg'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation(); 
    const [selectedLanguage,setSelectedLanguage] = useState({title:"English",value:"en"})

    const Languages = [{title:"English",value:"en"},{title:"Russian",value:"ru"}]

    const items = [
        { title: t('faq'), link: "https://help.netflix.com/tr/node/412" },
        { title: t('help_center'), link: "https://help.netflix.com/tr" },
        { title: t('account'), link: "//Sign" },
        { title: t('media_center'), link: "https://media.netflix.com/tr/" },
        { title: t('investor_relations'), link: "https://ir.netflix.net/ir-overview/profile/default.aspx" },
        { title: t('jobs'), link: "https://jobs.netflix.com/" },
        { title: t('ways_to_watch'), link: "https://help.netflix.com/tr/node/14361" },
        { title: t('terms_of_use'), link: "https://help.netflix.com/legal/termsofuse" },
        { title: t('privacy'), link: "https://help.netflix.com/legal/privacy" },
        { title: t('cookie_preferences'), link: "//" },
        { title: t('corporate_information'), link: "https://help.netflix.com/tr/node/134094" },
        { title: t('contact_us'), link: "https://help.netflix.com/tr/contactus" },
        { title: t('speed_test'), link: "https://fast.com/tr/" },
        { title: t('legal_notices'), link: "https://help.netflix.com/legal/notices" },
        { title: t('only_on_netflix'), link: "https://www.netflix.com/az/browse/genre/839338" },
    ];
    
    return (

        <div className="mt-16 mx-5 md:m-0 md:mt-16 font-bold md:font-medium">
            <a className="text-[16px] text-[#B3B3B3] font-roboto underline mb-4 block">Questions? Contact us.</a>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-4 text-gray-400">
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-roboto text-[#B3B3B3] underline text-[14px] leading-[21px] "
                    >
                        {item.title}
                    </a>
                ))}
            </div>
            <div className='flex items-center gap-2 mt-14 h-[33px]'>
                <RandomSelect selectedOption={selectedLanguage} setSelectedOption={setSelectedLanguage} options={Languages} logo={<img src={language}></img>}/>

            </div>
            <p className="text-[14px] bg-black text-white mt-8">
                {t('netflix_Azerbaijan')}
            </p>
        </div>
    )
}

export default Footer