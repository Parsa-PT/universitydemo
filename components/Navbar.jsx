import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div dir='rtl' className=' w-full flex py-2 px-10 h-[5rem] '>
        <div className=' w-full flex justify-between lg:hidden'>
            <Image src='./logo.png' alt='logo' width={70} height={10}/>
            <Image src='./menu.svg' alt='logo' width={30} height={10}/>
        </div>

        <div className=' w-full lg:flex justify-between hidden '>
        <Image src='./logo.png' alt='logo' width={70} height={10}/>
            <ul className='flex gap-20 text-lg items-center'>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>خانه</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>درباره ما</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>کاروزی</li>
            </ul>
            <div className=' flex justify-center relative items-center'>
               <input type="text" placeholder='جستجو...'  className='w-[14rem] relative px-2 rounded-[1rem]  shadow-md h-[3rem]' />
               <Image src='./search.svg' alt='logo' className=' absolute left-1' width={30} height={10}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar
