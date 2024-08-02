import React from 'react';
import Image from "next/image";
import Phone from "../assets/Phone mockup.png";
import QR from "../assets/bba qr  1.png";
import arrow from "../assets/bended-arrow.png";
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

const Download = () => {
  return (
    <div className="lg:py-20 lg:px-24 xsm:px-12 px-6 py-10 bg-bg3 flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center  overflow-hidden">
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.3)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        className='custom-lg:mr-10 custom-lg:mb-0 mb-20 custom-lg:w-1/2 w-full flex items-center justify-center'
      >
        <Image src={Phone} alt='phone' className='w-[378px] h-[683px]' />
      </motion.div>
        <motion.div className='flex flex-col custom-lg:items-start  custom-lg:w-1/2 w-full'
                    variants={fadeIn("left", "tween", 0.2, 0.3)} 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true}}
        
        >
            <h1 className='uppercase text-bg1 font-bebas custom-lg:text-[140px] md:text-[120px] text-[90px] leading-[80px] md:leading-[120px] custom-lg:max-w-[522px] w-full mb-5' >Deliciously
            Simple</h1>
            <p className='font-rubik md:text-4xl text-2xl text-bg1  custom-lg:max-w-[571px] w-full uppercase mb-10' >Download the Bawarchi App
            Today</p>
            <div className='flex items-center ' >
                <Image src={QR}  alt='QR' className='md:w-[240px] md:h-[240px] w-[200px] h-[200px]' />
                <div className='flex flex-col md:ml-5 ml-2 mt-10 md:mt-0' >
                    <Image src={arrow} alt='arrow' className='md:w-[54px] md:h-[45px] w-[40px] h-[34px]' />
                    <span className='font-rubik md:text-xl text-lg' >Scan the QR code!</span>

                </div>

            </div>

        </motion.div>

    </div>
  )
}

export default Download