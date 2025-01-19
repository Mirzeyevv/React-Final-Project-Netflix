import televizon from "../../assets/images/televizon.svg"
import watch from "../../assets/images/watch.svg"
import face from "../../assets/images/face.svg"
import dowland from "../../assets/images/dowland.svg"
import React from 'react' 
import ReasonCard from "./ReasonCard"
import { useTranslation } from 'react-i18next';


const ReasonsToJoin = () => {
    const { t } = useTranslation(); 
    const items = [
        {
            title:t('enjoy_on_your_tv'),
            desc:t('watch_on_smart_tv'),
            img:televizon
        },
        {
            title:t('download_your_shows_to_watch_offline'),
            desc:t('save_your_favorit'),
            img:dowland
        },
        {
            title:t('watch_everywhere'),
            desc:t('stream_unlimited'),
            img:watch
        },
        {
            title:t('create_profiles_for_kids'),
            desc:t('send_kids'),
            img:face
        }
    ]
  
    return (
        <div>
            <h2 className="text-white font-medium text-[24px] mb-4">{t('more_reasons_to_join')}</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 ">
                {items.map(item => <ReasonCard item={item}/>)}
            </div>
        </div>
  )
}

export default ReasonsToJoin