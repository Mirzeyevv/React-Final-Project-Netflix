import GenreItems from './GenreItems'
import {motion} from 'motion/react'
import {useEffect} from 'react'
import { createPortal } from 'react-dom'
import Close from '../../assets/icons/close.svg'
import Right from '../../assets/icons/right.svg'
import { useTranslation } from 'react-i18next';

const Modal = ({data,handleModalClose,scrollY}) => {
    const { t } = useTranslation(); 
    useEffect(() => {console.log(scrollY)},[scrollY])


  return (
    createPortal(
        <div style={{top:scrollY}} onClick={handleModalClose} className='absolute left-0 w-screen h-screen bg-black/50 flex items-center justify-center'>
            <motion.div initial={{opacity:0}} animate={{opacity:1 , transition:{duration:0.3}}}>
                <div className='size-[420px] md:size-[620px] border-px border-zinc-300 rounded-lg bg-zinc-900 overflow-y-scroll relative'>
                    <button onClick={handleModalClose} className='z-10 absolute top-4 right-4 hover:bg-zinc-500/25 hover:cursor-pointer rounded-full p-2 flex items-center justify-center'>
                        <img className='' src={Close} alt="" />
                    </button>

                    <div className='relative' onClick={(e)=> {e.stopPropagation()}}>
                        <div className='absolute w-full h-full bg-gradient-to-tr from-zinc-900 from-25% via-transparent via-55% flex items-end'>
                            <h3 className='text-white text-5xl font-bold ml-8 mb-6'>{data.media_type === "movie" ? data.title : data.name}</h3>
                        </div>
                        <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} alt="movie.png" />
                    </div>

                    <div className='px-8 pb-5' onClick={(e)=> {e.stopPropagation()}}>
                        <GenreItems genres={data.genres}/>
                        <p className='text-white'>{data.overview}</p>
                        <button className='flex items-center justify-center bg-[#e50914] hover:bg-[#ce272ffb] text-white text-[18px] h-full px-4 py-3 pr-6 gap-4 rounded-[4px] mt-5'>{t('call_to_action')}
                            <img src={Right} alt="" />
                        </button>
                    </div>

                </div>
            </motion.div>
        </div>,
        document.getElementById("landing")

    )
  )
}

export default Modal