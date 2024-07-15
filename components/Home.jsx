'use client'
import React from 'react'
import Image from "next/image";

const Home = () => {
  return (
    <section className=' relative '>
        <div className=' w-full relative h-[20rem] lg:h-screen'>
         <Image src='/main2.jpg' alt='logo' fill/>
        </div>
        <div className=' absolute  top-16 lg:top-[14rem] left-[50%] translate-x-[-50%]'>
            <div className=' w-[25rem] h-[20rem] lg:w-[70rem] lg:h-[50rem] lg:border-[6px] flex justify-center items-center rounded-[200%] border-[3px] border-white'>
                <div className=' w-[24rem] h-[19rem] lg:w-[67rem] lg:border-[6px] lg:h-[48rem] flex justify-center items-center rounded-[200%] border-[3px] border-white'>
                    <div className=' w-[23rem] flex justify-center lg:w-[64rem] lg:border-[6px] lg:h-[46rem]  pt-10  h-[18rem] rounded-[200%] border-[3px] border-white'>
                            <h1 className=' text-white lg:text-4xl 2xl:mt-5 font-bold'>
                                دانشگاه علمی کاربردی قند کرج
                            </h1>
                    </div>
                </div>
            </div>
            
        </div>

        <div className=' flex justify-center'>
            <div className=' absolute top-[10rem] lg:top-[25rem] shadow-xl w-[25rem] lg:w-[60rem] xl:w-[72rem] xl:h-[42rem] 2xl:w-[80rem] 2xl:h-[45rem] lg:h-[30rem] shadow-[#0000006f] rounded-[20px] h-[15rem] bg-white'>
            <Image src='/register.jpg' alt='logo' className='rounded-[20px] ' fill/>
            </div>
        </div>
    </section>
  )
}

export default Home
