import { useNavigate } from "react-router-dom"
import NetflixLogo from '../../assets/images/NetflixLogo.png'

const Navbar_SignUp = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/')}>
            <img className='w-[190px] md:w-[120px] lg:w-[160px] absolute flex items-start md:left-[168px]' src={NetflixLogo} alt="" />
        </button>
    )
}   

export default Navbar_SignUp