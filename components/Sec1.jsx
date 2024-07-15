import React from 'react'
import Image from "next/image";
import { SEC } from '@/constant';


const Sec1 = () => {
  return (
    <section className=' w-full flex flex-col justify-center mt-[10rem] mb-10 lg:mt-[20rem]'>
        <div  className=' w-full flex mb-20 justify-center flex-col items-center'>
            <h2 className=' text-red-500 z-20 mb-2 text-[25px] relative '>
            دسته بندی دروس
            <span className=' w-full absolute bottom-1 left-0 -z-10 rounded-t-2xl bg-red-100 h-3'/>
            </h2>
            <h3 className=' text-4xl font-bold'>
            اساتید کارورزی
            </h3>
        </div>

        <div className=' flex flex-col lg:flex-row  mb-10 lg:flex-wrap gap-y-20 lg:gap-x-5 justify-center items-center'>
            {SEC.map((item,index)=>(
                <div key={index} className=' w-[285px] h-[323px] group rounded-[20px] shadow-xl  flex justify-center flex-col items-center shadow-[#0000008d] bg-[#5a77ecce] lg:bg-white lg:shadow-md lg:hover:bg-[#5a77ecce] lg:hover:shadow-[#0000008d] transition-all ease-in duration-200 '>
                    <div className=' w-[228px] h-[176px] relative  bg-white  shadow-md -mt-[4rem] mb-10 rounded-lg  border-black'>
                        <Image src={item.pic} alt='pic' className='rounded-[10px] ' fill/>
                    </div>
                    <div className=' flex justify-center  mb-10'>
                            <div className=' w-[10rem] group-hover:bg-red-100 transition-all ease-in duration-100 h-[3rem] flex items-center justify-center rounded-full bg-white'>
                                <p className=' text-red-400'>{item.title}</p>
                            </div>
                    </div>
                    <p className=' text-2xl'>{item.name}</p>
            </div>
            ))}
            
            
        </div>

        <div className=' w-full flex justify-center'>
                <button className=' relative z-20  hover:text-white transition-all  duration-300 group w-[10rem] h-[3rem] border border-red-200 text-red-300 hover:'>
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in  duration-300 shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute right-0 top-0'/>
                    درباره ما
                    <span className=' w-0 -z-20  group-hover:w-full transition-all ease-in duration-300  shadow-md  shadow-red-300  h-[3rem] bg-red-400 absolute left-0 top-0'/>
                </button>
            </div>
    </section>
  )
}

export default Sec1
