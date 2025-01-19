import React, { useState } from 'react';
import Navbar from './Navbar';
import EmailInput from './EmailInput';
import { useTranslation } from 'react-i18next';

const Entry = () => {
    const { t } = useTranslation(); 
    const [width, setWidth] = useState(true);
    return (
        <div className='w-full h-[755px] lg:h-[775px] px-4 md:px-[9rem] bg-cover bg-blend-overlay bg-no-repeat bg-black/70 bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/AZ-en-20241216-TRIFECTA-perspective_90a8f7dc-67cc-4d07-b0c9-4f2aed27f1cc_large.jpg")]'>
            <Navbar />
            <div className='w-full md:w-[580px] h-fit mx-auto pt-[120px] md:pt-[180px] flex flex-col items-center'>
                <h1 className='font-bold text-[40px] md:text-[60px] text-white leading-[45px] md:leading-[65px] text-center'>{t('tagline')}</h1>
                <p className='text-white font-semibold text-[16px] md:text-[20px] text-center mt-5'>{t('price')}</p>
            </div>
            <EmailInput widthInput={width} />
        </div>
    );
};

export default Entry;
