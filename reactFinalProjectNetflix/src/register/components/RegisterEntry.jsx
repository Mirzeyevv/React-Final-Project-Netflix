import React from 'react'
import Navbar_SignUp from './Navbar_SignUp'
import SignUpBorder from './SignUpBorder'
import Footer_SignUp from './Footer_SignUp'
const RegisterEntry = () => {
  return (
    <>
      <div className='h-[1300px] md:h-[1100px] bg-black'>
        <div className='w-full h-screen lg:h-[775px] px-4 md:px-[9rem] bg-cover bg-blend-overlay bg-no-repeat bg-black/50 bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/AZ-en-20241223-TRIFECTA-perspective_f236084e-fe39-4a36-b690-32b396b0a419_small.jpg")]'>
          <Navbar_SignUp />  
          <SignUpBorder />
        </div>  
        <div className='h-[310.4px] bg-black '>
          <Footer_SignUp/>
        </div>
      </div>

    </>
  )
}

export default RegisterEntry