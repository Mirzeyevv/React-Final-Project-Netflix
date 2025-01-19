const MovieCard = ({item,index,setSelectedItem}) => {
    return (
      <div className="relative min-w-[112px] h-[156px] md:min-w-[180px] md:h-[250px] hover:scale-110 transition duration-150 ease-in" 
      onClick={() => {setSelectedItem(item)}}>
          <p className="absolute -left-7 bottom-4 text-[100px] drop-shadow-[0_0_4px_#fff] font-bold">{index + 1}</p>
          <img className="w-full h-full object-cover rounded-lg" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}   />
      </div>
    )
  }
  
  export default MovieCard