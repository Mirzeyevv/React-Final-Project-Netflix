import NetflixLogo from '../../assets/images/netflixLogo.png'

const Navbar = ({selectedTab, setSelectedTab, tabItems}) => {

  return (
    <div className='absolute w-screen left-0 top-0 flex items-center gap-[67px] px-[90px] py-[30px]'>
        <img src={NetflixLogo} className='h-[38.18px] w-[139px]' alt="" />
        <div className='flex items-center gap-[28px]'>
            {tabItems.map(item => <button className={`${selectedTab.value === item.value ? "font-bold text-white text-[20px]" : "text-zinc-50"}`}
              onClick={() => setSelectedTab(item)}>{item.title}</button> )}
        </div>


    </div>
  )

}

export default Navbar


