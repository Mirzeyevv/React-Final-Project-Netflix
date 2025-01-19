import {useState} from 'react'
import { useTranslation } from 'react-i18next';
import RightSvg from '../../assets/icons/right.svg'

const EmailInput = (witdh) => {
    const [email,setEmail] = useState('')
    const { t } = useTranslation(); 
    return (
        <>
            <p className='text-white font-regular text-base text-center mt-7'>{t('ready')}</p>
            <div className={`flex flex-col ${witdh ? "max-w-[580px]" : "max-w-[750px]"} items-center md:flex-row h-[100px] md:h-[55px] mx-auto mt-5 gap-2`}>
                <input className='w-full bg-transparent border-[1px] border-zinc-400 h-full px-4 rounded-[4px] text-white' value={email} onChange={(e) => {setEmail(e.target.value)}} type="text" placeholder={t('email_address')} />
                <button className='min-w-[200px] flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white font-semibold text-[22px] h-full px-4 pr-6 gap-4 rounded-[4px]'>{t('call_to_action')}
                    <img className='w-[25px]' src={RightSvg}></img>
                </button>
            </div>
        </>

  )
}

export default EmailInput