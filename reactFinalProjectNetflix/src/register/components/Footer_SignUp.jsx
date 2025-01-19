import React from 'react'
import language from '../../assets/icons/language.svg'
import RandomSelect from '../../landing/components/RandomSelect'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Footer_SignUp = () => {
    const { t } = useTranslation();
    const [selectedLanguage,setSelectedLanguage] = useState({title:"English",value:"en"})
    const Languages = [{title:"English",value:"en"},{title:"Russian",value:"ru"}] 

    const items = [
        { title: t('faq'), link: "https://help.netflix.com/tr/node/412" },
        { title: t('help_center'), link: "https://help.netflix.com/tr" },
        { title: t('terms_of_use'), link: "https://help.netflix.com/legal/termsofuse" },
        { title: t('privacy'), link: "https://help.netflix.com/legal/privacy" },
        { title: t('cookie_preferences'), link: "//" },
        { title: t('corporate_information'), link: "https://help.netflix.com/tr/node/134094" },
      ];
    return (
        <div className={`w-full max-w-[1440px] px-4 sm:px-8 md:px-20 lg:px-32 xl:px-[144px] relative mb-20  md:m-0 md:mt-20 font-bold md:font-medium`}>
            <a className="text-[16px] text-[#B3B3B3] font-roboto mb-4 block">Questions? Contact us.</a>
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
        </div>  
)
}

export default Footer_SignUp