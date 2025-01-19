import {useState} from 'react'
import FAQItem from './FAQItem'
import EmailInput from './EmailInput'
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const [width, setWidth] = useState(false);
    const { t } = useTranslation(); 
    const [openItem,setOpenItem] = useState(null)
    
    const items = [
        {
            title:t('what_is_netflix'),
            desc:t('what_is_netflix_answer'),
            id:1
        },
        {
            title:t('how_much_does_netflix_cost'),
            desc:t('how_much_does_netflix_cost_answer'),
            id:2
        },
        {
            title:t('where_can_i_watch'),
            desc:t('where_can_i_watch_answer'),
            id:3
        },
        {
            title:t('how_do_i_cancel'),
            desc:t('how_do_i_cancel_answer'),
            id:4
        },
        {
            title:t('what_can_i_watch_on_netflix'),
            desc:t('what_can_i_watch_on_netflix_answer'),
            id:5
        },
        {
            title:t('is_netflix_good_for_kids'),
            desc:t('is_netflix_good_for_kids_answer'),
            id:6
        },
        {
            title:t('why_seeing_this_language'),
            desc:t('why_seeing_this_language_answer'),
            id:7
        },
    ]
    
    
    return (
        <div className='mt-[64px]'>
            <h2 className='text-[24px] font-medium text-white mb-4'>{t('frequently_asked_questions')}</h2>
            <div className='flex flex-col gap-[8px]'>
                {
                    items.map(item => <FAQItem item={item} openItem={openItem} setOpenItem={setOpenItem} />)
                }
            </div>
            <EmailInput widthInput={width}/>

        </div>
    )
}

export default FAQ