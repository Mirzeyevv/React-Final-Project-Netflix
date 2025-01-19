import {useState,useEffect} from 'react'
import { motion } from "motion/react"
import Home from './components/Home'
import Shows  from './components/Shows.jsx';
import Movies from './components/Movie.jsx';
import Navbar from './components/Navbar.jsx';


const HomePage = () => {
    
    const [selectedTap,setSelectedTap] = useState({title:"Home",value:"home"});
    const [trendingMovies,setTrendingMovies] = useState([]);

    const tapItems =[
        {title:"Home",value:"home"},
        {title:"TV Shows",value:"tv"},
        {title:"Movies",value:"movie"},
        {title:"New & Popular",value:""},
        {title:"My List",value:""},
        {title:"Browse by Languages",value:""}
    ] 

    const getMovies = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/movie/trending`);
            const data = await response.json();
            if(response.ok){
                setTrendingMovies(data.content);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {getMovies()},[]); 

    const visibleTap = () => {
        switch (selectedTap.value) {
            case "movie":
                return <Movies trendingMovies={trendingMovies}/>
            case "tv":
                return <Shows/>              
            default:
                return <Home visbleMovie={trendingMovies[0]}/>
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
            <div className='relative'>
                <Navbar selectedTab={selectedTap} setSelectedTab={setSelectedTap} tabItems={tapItems}/>
                {visibleTap()}
            </div>
        </motion.div>    
  )
}

export default HomePage