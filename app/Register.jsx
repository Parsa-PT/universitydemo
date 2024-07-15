'use client'
import React from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie'


const Register = () => {

  const my =()=>{
    window.location.assign('https://parsa-pt.github.io/universitydemo/')
  }

  return (
    <div dir='rtl' className=' flex flex-col md:flex-row justify-center items-center min-h-[100vh]'>
      <div className='  w-[22rem]  h-[42rem] md:h-[29rem]   flex flex-col-reverse  md:flex-row-reverse justify-between md:w-[47rem] lg:w-[57rem] xl:w-[70rem] xl:h-[35rem] bg-white shadow-lg'>
        <div className=' w-full h-[17rem] md:h-full relative'>
        <Image src='./register2.jpg' alt='pic' fill/>

        </div>
            <div className=' w-full h-[65%]  md:w-[45%] md:h-full bg-[#15436b8c]'>
                <div className=' w-full flex justify-center pt-7'>

                <Image src='./logo.png' alt='logo' width={100} height={10}/>

                </div>

                <div className='container  px-5'>
                <form  className=" flex flex-col gap-5 md:gap-8 mt-20 " action="">
                    <div className="inputs">
                        <input  dir="rtl" type="text" required />
                        <label>نام</label>
                    </div>
                    <div className="inputs">
                        <input  type="text" required />
                        <label>ایمیل</label>
                    </div>
                    
                    <div className=' flex justify-center '>
                    <div className="login-btn  -mt-2  mb-1.5">
                        <button onClick={my}   className=' text-xl' >ورود</button>
                    </div>
                    </div>
                    
                 </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Register
