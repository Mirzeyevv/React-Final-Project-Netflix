import React from 'react'
import top10 from '../../assets/images/Top10.svg'
import info from '../../assets/images/Info.svg'
import polygon from '../../assets/images/Polygon1.svg'

const Home = ({visbleMovie}) => {

  return (
    visbleMovie && <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${visbleMovie.backdrop_path})`}} className='h-screen w-full flex items-center bg-cover bg-blend-overlay bg-no-repeat bg-black/50 bg-center '>
      <div className='max-w-[400px] ml-[90px]'>
        <h2 className='text-7xl text-white font-bold'>{visbleMovie.title}</h2>
        <div className='flex items-center gap-2 my-5'>
          <img src={top10} alt="" />
          <h3 className='text-white text-2xl font-bold'>#1 in Movies Today</h3>
        </div>
        <p className='text-white'>{visbleMovie.overview.slice(0,150)}...</p>
        <div className='flex items-center gap-3 mt-5'>
          <button className='flex items-center gap-3 text-[20px] bg-white w-[111px] h-[42px] text-black font-bold px-6 py-3 rounded-[4px] hover:bg-zinc-300 transition duration-200 ease-in'>
            <img src={polygon} alt="" />
            Play</button>
          <button className='flex items-center gap-3 w-[160px] h-[42px] bg-[#515451] text-white font-bold px-6 py-3 rounded-[4px] hover:bg-zinc-600 transition duration-200 ease-in'>
            <img src={info} alt="" />
            More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Home