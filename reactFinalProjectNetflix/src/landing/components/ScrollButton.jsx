
import React from 'react'
import Left from '../../assets/icons/left.svg'
import Right from '../../assets/icons/right.svg'

const ScrollButton = ({ direction }) => {
    const toRight = direction === "right"; 

    return (
        <button
            onClick={() =>
                document.querySelector("#movie-card-contanier").scrollBy({
                    left: toRight ? 220 : -220,  
                    behavior: "smooth", 
                })
            }
            className={`z-10 absolute ${toRight ? "-right-10" : "-left-10"} flex top-10 md:top-24  items-center justify-center bg-zinc-900 h-[120px] w-[34px] hover:bg-zinc-800 duration-200 p-2 rounded-lg`}
        >
            <img src={toRight ? Right : Left} alt=".svg" />
        </button>
    );
};

export default ScrollButton