import { motion } from "motion/react"

const Movie = ({trendingMovies}) => {

  return (
    
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
      <div className='grid grid-cols-5 px-[90px] pt-[120px] gap-10'>
        {trendingMovies.map(item => <button>
          <img className='min-w-[112px] h-[156px] md:min-w-[185px] md:h-[250px] hover:scale-110 transition duration-150 ease-in' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
        </button>)}
      </div>
    </motion.div>

  )
}

export default Movie