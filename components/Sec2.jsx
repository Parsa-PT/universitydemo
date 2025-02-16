import React from 'react'
import Image from "next/image";
import { SEC3 } from '@/constant';

const Sec2 = () => {
  return (
    <section className=' mt-[10rem] mb-10'>
        <div className='SEC2 w-full    pb-16'>
            <div className=' w-full flex justify-center'>
                <div className=' w-[20rem] lg:w-[27rem] rounded-b-2xl flex justify-center items-center h-[4rem] bg-white'>
                  <h1 className=' font-bold lg:text-2xl'>آشنایی با مرکز علمی-کاربردی قند کرج</h1>
                </div>   
            </div>

            <div dir='rtl' className=' px-5  mb-10  lg:px-10 mt-20'>
                <p className=' text-white leading-[2rem]'>
                مرکز آموزش بین المللی علمی – کاربردی قندکرج پس از دریافت مجوز از دانشگاه جامع علمی – کاربردی کشور فعالیت خود را از نیمسال دوم سال تحصیلی ۹۰-۹۱ با پذیرش ۸۵ نفر دانشجو در مقطع کاردانی آغاز نمود و توانست با گسترش فضای فیزیکی و ایجاد امکانات آموزشی با سرعت قابل تحسینی رشته های تحصیلی خود را در دو مقطع کاردانی و کارشناسی با حدود ۲ هزار نفر دانشجو با بیش از ۲۹ رشته افزایش دهد. در سال ۱۳۹۴ انعکاس وضعیت مطلوب مرکز به دانشگاه جامع کشور شرایط را به گونه ای رقم زد که مرکز آموزش علمی – کاربردی قند کرج توانست مجوز اولیه تأسیس مرکز رشد خوشه فناوری های قند، شیرینی، شکلات و صنایع وابسته البرز را دریافت نماید این مرکز دو مجوز راه اندازی مرکز نوآوری سنگ های قیمتی و صنایع وابسته و مرکز نوآوری خانه های هوشمند را نیز در سال ۹۷ کسب نمود، و همچنین دارای دفتر مشاوره و کارآفرینی و کلینیک صنعت می باشد. مرکز نمونه و برتر در بین ۲۰۰ مرکز صنعتی کشور در چندین سال متوالی و کسب عنوان اولین مرکز بین المللی برای جذب دانشجوی غیر ایرانی غیر بورسیه را در سال ۹۸ دریافت نموده است. حسن کریمی در گفت و گو با ایسنا، گفت: مرکز آموزش علمی-کاربردی قند کرج به منظور ارتقاء سطح تحصیلات و دانش کارکنان شرکت‌های صنعتی و خدماتی و علاقه مندان به این نوع رشته ها به منظور ایجاد یک مجموعه تخصصی و نیروی کارآمد برای واحد های صنعتی و خدماتی در بهمن سال ۱۳۹۰ توسط شرکت تولیدی قند کرج با استفاده از فضای خود کارخانه تاسیس شد.
                </p>
            </div>
             
             <div className=' w-full flex  flex-wrap items-center gap-y-4 lg:flex-row gap-x-3 justify-around'>
              {SEC3.map((i, index)=>(
                <div key={index} className='w-[268px] h-[258px] flex group justify-center flex-col gap-y-6 items-center bg-[#1A4E52] rounded-xl transition-all ease-in duration-100 hover:shadow-lg hover:shadow-white'>
                    <div className=' relative z-10 w-[67px] h-[67px]   bg-[#FF6752] rounded-tl-[20px] rounded-tr-[5px]  rounded-b-[5px]'>
                        <div className='  -z-10 w-[67.5px] h-[67.5px] flex justify-center items-center  bg-[#F8F8F8] -rotate-[30deg] transition-all ease-linear duration-100 group-hover:rotate-[30deg]   rounded-tl-[20px] rounded-tr-[5px]  rounded-b-[5px] '>
                              <Image src={i.pic} alt='pic' className='rotate-[30deg] group-hover:-rotate-[30deg]  ' width={40} height={50}/>
                        </div>
                    </div>
                     <h1 className=' text-2xl text-white font-bold'>
                     {i.title}
                     </h1>
                     <h2 className=' text-xl text-white font-bold'>
                       {i.desc}
                     </h2>
                </div>
              ))}
                
             </div>
        </div>
    </section>
  )
}

export default Sec2
