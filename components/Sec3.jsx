import React from 'react'
import Image from 'next/image'

const Sec3 = () => {
  return (
    <div className=' w-full flex-col lg:flex-row  mb-16 items-center gap-y-10 flex justify-around   '>
      <div className=' w-[370px] h-[373px]  hover:border-l-2  group hover:border-r-2 hover:border-b-2 hover:border-red-400  transition-all ease-in duration-150 hover:shadow-red-200 hover:rounded-xl bg-white drop-shadow-lg'>
            <div className=' mb-3 w-full h-[13rem] overflow-hidden relative group-hover:rounded-xl'>
                <Image src='./learn.jpg' className=' group-hover:scale-125 transition-all ease-in duration-150 ' alt='pic' fill/>
            </div>

            <div className=' flex flex-col gap-y-5 items-center'>
                <h1>
                دوره های اموزش زبان
                </h1>
                <h2>شروع دوره از تابستان</h2>
                <button className=' relative z-20  hover:text-white transition-all  duration-300 group w-[10rem] h-[3rem] border border-red-200 text-red-300 hover:'>
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in  duration-300 shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute right-0 top-0'/>
                    ثبت نام
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in duration-300  shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute left-0 top-0'/>
                </button>
            </div>
      </div>
      <div className=' w-[370px] h-[373px]  hover:border-l-2  group hover:border-r-2 hover:border-b-2 hover:border-red-400  transition-all ease-in duration-150 hover:shadow-red-200 hover:rounded-xl bg-white drop-shadow-lg'>
            <div className=' mb-3 w-full h-[13rem] overflow-hidden relative group-hover:rounded-xl'>
                <Image src='./sec3.jpg' className=' group-hover:scale-125 transition-all ease-in duration-150 ' alt='pic' fill/>
            </div>

            <div className=' flex flex-col gap-y-5 items-center'>
                <h1>
                دوره های اموزش نرم افزار
                </h1>
                <h2>شروع دوره از تابستان</h2>
                <button className=' relative z-20  hover:text-white transition-all  duration-300 group w-[10rem] h-[3rem] border border-red-200 text-red-300 hover:'>
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in  duration-300 shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute right-0 top-0'/>
                    ثبت نام
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in duration-300  shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute left-0 top-0'/>
                </button>
            </div>
      </div>
      
    </div>
  )
}

export default Sec3
