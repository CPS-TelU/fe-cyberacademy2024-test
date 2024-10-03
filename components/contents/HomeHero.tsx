import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa"
import { dmSans } from '../../styles/font';
import Videoplayer from "../ui/VideoPlayer";

const HomeHero = () => {

    return (
        <section className={`flex justify-center text-center min-h-screen py-12 ${dmSans.className}`} >
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">
                    HI <span className="gradient-text">CYTIZEN</span> !!
                </h1>
                <h1 className="text-5xl font-bold">
                    WELCOME TO <span className="gradient-text">CYBER ACADEMY</span>
                </h1>
                <p className="mt-8 text-lg font-medium">
                    BRACE YOURSELF FOR A WHOLE NEW ADVENTURE
                </p>
                <Link 
                href="/"
                className="inline-flex items-center justify-center text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[1.3vw] xl:text-[1vw]  bg-[#BA2025] text-white py-2 px-6 rounded-2xl mt-8 inline-block hover:bg-red-800 transition-colors duration-300"
            >Let's Get Started <FaArrowRight className="ml-2"/>
            </Link>

            <div className="mt-10">
                <Videoplayer/>
            </div>
            </div>
        </section>
    );
}

export default HomeHero;
