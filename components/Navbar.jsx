'use client'
import {useState , useEffect} from 'react'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [showNav , setShowNav] = useState(false)


  return (
    <div dir='rtl' className=' w-full flex py-2 px-10 h-[5rem] '>

      
        <div className=' w-full flex justify-between lg:hidden'>
            <Image src='./logo.png' alt='logo' width={70} height={10}/>
            <div className=' flex justify-center items-center' onClick={()=> setShowNav(!showNav)}>
            <Image src='./menu.svg' alt='logo' width={30} height={10}/>

            </div>
        </div>

        <div className=' w-full lg:flex justify-between hidden '>
        <Image src='./logo.png' alt='logo' width={70} height={10}/>
            <ul className='flex gap-20 text-lg items-center'>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>خانه</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>درباره ما</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>کاروزی</li>
                <Link href='/home'>
                <li  className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>حساب کاربری</li>
                
                </Link>
            </ul>
            <div className=' flex justify-center relative items-center'>
               <input type="text" placeholder='جستجو...'  className='w-[14rem] relative px-2 rounded-[1rem]  shadow-md h-[3rem]' />
               <Image src='./search.svg' alt='logo' className=' absolute left-1' width={30} height={10}/>
            </div>
        </div>


       
        <AnimatePresence>
          {showNav?(
            <motion.div animate={{height:300 , opacity:1}} exit={{height:0 , opacity:0}} initial={{height:0}} transition={{duration:0.3}}  className=' absolute bg-white z-50 right-0 top-20 w-full '>
              <div className=' flex justify-center  mb-5 relative items-center'>
               <input type="text" placeholder='جستجو...'  className='w-[14rem] relative px-2 rounded-[1rem]  shadow-md h-[3rem]' />

            </div>
                <ul className='flex flex-col  gap-y-6 text-lg items-center'>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>خانه</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>درباره ما</li>
                <li className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>کاروزی</li>
                <Link href='/home'>
                <li  className=' hover:border-b-2 hover:border-t-2 hover:border-[#82B9BD] transition-all ease-in duration-75'>حساب کاربری</li>
                
                </Link>
            </ul>

            
            </motion.div>     
          ):null}

        
        </AnimatePresence>
      
           

   
    </div>
  )
}

export default Navbar
