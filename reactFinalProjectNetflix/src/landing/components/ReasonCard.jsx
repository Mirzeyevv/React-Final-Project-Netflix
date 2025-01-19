import React from 'react'

const ReasonCard = ({item}) => {
  return (
    <div className='bg-white px-4 pt-6 w-full h-[250px] lg:max-w-[417px] md:max-w-[274px] xl:min-h-[290px] rounded-[16px] bg-gradient-to-br from-[#192247] to-[#210E17] relative'>
        <h2 className='text-white font-medium text-[24px] mb-4'>{item.title}</h2>
        <p className='text-white/70'>{item.desc}</p>
        <img className='size-[72px] absolute bottom-2 right-2' src={item.img} alt="img.png" />
    </div>
  )
}

export default ReasonCard