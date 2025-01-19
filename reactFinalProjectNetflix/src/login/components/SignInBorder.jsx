import { useState } from 'react';
import { useStore } from 'zustand';
import { themeStore } from '../../common/Store.js'
import { useNavigate } from 'react-router-dom';

const SignInBorder = () => {
    const navigate = useNavigate();
    const {addAccessToken} = useStore(themeStore);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const toggleContent = (e) => { 
        e.stopPropagation(); 
        setIsVisible((prev) => !prev);
    };

    const handleSignUpClick = () => {
        navigate('/Register')  
    }

    const handleLoginClick = () => {
        navigate('/Login')  
    }

    const login = async () => {
        try{
            const response = await fetch("http://localhost:5001/api/v1/auth/login", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email, password})
            });

            const data = await response.json();

            if(response.ok){
                addAccessToken(data.accessToken);
                handleLoginClick();
            }
        }
        catch(error){
            console.log(error);
        }   
    }

    return (
        <div className='h-[741px] mt-[50px] lg:mt-[-200px] xl:mt-[100px]'>
            <div className='flex items-center justify-center h-screen'>
                <div className='px-[68px] py-12 w-[450px] h-[741.89] bg-[#000000B3]'>
                    <h1 className='text-white text-[32px] leading-9 font-bold'>Sign In</h1>
                    <input className='mt-10 text-white h-14 w-[314px] bg-transparent border rounded border-[#343534] p-2' name='email' type="email" placeholder='Email or mobile number' onChange={(e) => setEmail(e.target.value)} />
                    <input className='mt-5 h-14 text-white w-[314px] bg-transparent border rounded border-[#343534] p-2' name='password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button className='mt-5 text-white text-[16px] font-medium h-10 w-[314px] bg-[#e50914] transition-all duration-500 hover:bg-[#c11119] border rounded border-transparent' onClick={login}>Sign In</button>
                    <p className='text-[#7c7c7b] font-medium text-base mt-4 ml-[147px]'>OR</p>
                    <button className='mt-5 text-white text-[16px] font-medium h-10 w-[314px] bg-[#434343] transition-all duration-500 hover:bg-[#2f2f2f] border rounded border-transparent'>Use a Sign-In Code</button>
                    <button className='mt-3 ml-[92px] text-white text-[17px] h-10 w-[140px] bg-transparent hover:underline hover:text-[#979e99]'>Forgot password?</button>
                    <div className="inline-flex items-center mt-5 space-x-3">
                        <input className="form-checkbox text-black h-4 w-5" type="checkbox" />
                        <span className='text-white'>Remember me</span>
                    </div>
                    <div className='mt-3 space-x-2'>
                        <span className='text-[#FFFFFFB3]'>New to Netflix?</span>
                        <button onClick={handleSignUpClick}  className='text-white font-medium hover:underline'>Sign up now.</button>
                    </div>

                    <div className='mt-4'>
                        <span className='text-[#8C8C8C] text-xs'>This page is protected by Google reCAPTCHA to ensure you're not a bot. </span>
                        {!isVisible && (
                            <a onClick={toggleContent} className='text-[#0071EB] text-xs font-medium hover:underline cursor-pointer'>
                                Learn more.
                            </a>
                        )}
                    </div>

                    <div className={`transition-all duration-500 ease-in-out mt-4 min-h-[60px] ${
                            isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}>
                        <p className="text-[#8C8C8C] text-xs h-[106.67px] w-[292.13px]">
                            The information collected by Google reCAPTCHA is subject to the Google 
                            <a href="https://policies.google.com/privacy" className='text-[#0071EB] text-xs font-medium hover:underline'>Privacy Policy </a>   
                            and <a href="https://policies.google.com/terms" className='text-[#0071EB] text-xs font-medium hover:underline'>Terms of Service</a>
                            , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes 
                            (it is not used for personalized advertising by Google).
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignInBorder;