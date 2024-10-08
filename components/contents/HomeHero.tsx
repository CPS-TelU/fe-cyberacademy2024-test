import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa"
import { dmSans } from '../../styles/font';
import Videoplayer from "../ui/VideoPlayer";
import  ArrowButton   from '../ui/AniButton';

const HomeHero = () => {

    return (
        <section className={`flex justify-center font-bold min-h-screen py-20 ${dmSans.className}`} >
            <div className="text-center items-center">
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold mb-4">
                    HELLO <span className="gradient-text">CYTIZEN</span> !!
                </h1>
                <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold mb-4 mx-auto w-[390px] sm:w-[600px] md:w-[800px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px]">
                    WELCOME TO <span className="gradient-text">CYBER ACADEMY</span>
                </h1>
                <p className="mt-4 text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold ">
                    BRACE YOURSELF FOR A WHOLE NEW ADVENTURE
                </p>
                {/* <Link 
                href="/"
                className="inline-flex items-center justify-center text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw] xl:text-[1vw]  bg-[#BA2025] text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-800 transition-colors duration-300"
            >Let's Get Started <FaArrowRight className="ml-2"/>
            </Link> */}
            <ArrowButton text="Lets Get Started" href="/" className='mt-8'/> 

            <div className="mt-10">
                <Videoplayer/>
            </div>
            </div>
        </section>
    );
}

export default HomeHero;
