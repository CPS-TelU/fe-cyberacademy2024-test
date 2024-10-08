"use client";

import { useState } from 'react';

const Requirements = () => {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    return (
        <section className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
            <div>
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center mb-6 gradient-text">
                    Requirements
                </h1>

                {/* Accordion 1 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-3 sm:py-4 text-lg sm:text-xl font-medium text-left ${
                            isOpen1 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen1(!isOpen1)}
                    >
                        <span>CV ATS</span>
                        <span className={`${isOpen1 ? 'text-[#BA2025]' : 'text-gray-900'}`}>
                            {isOpen1 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen1 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            Creative Curriculum Vitae (CV) reflecting your educational background, experience, and skills.
                        </div>
                    </div>
                </div>

                {/* Accordion 2 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-3 sm:py-4 text-lg sm:text-xl font-medium text-left ${
                            isOpen2 ? 'text-[#BA2025]' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen2(!isOpen2)}
                    >
                        <span>Full Body Photo</span>
                        <span className={`${isOpen2 ? 'text-[#BA2025]' : 'text-gray-900'}`}>
                            {isOpen2 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen2 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            A recent full body photo that clearly shows your appearance.
                        </div>
                    </div>
                </div>

                {/* Accordion 3 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-3 sm:py-4 text-lg sm:text-xl font-medium text-left ${
                            isOpen3 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen3(!isOpen3)}
                    >
                        <span>Self Description</span>
                        <span className={`${isOpen3 ? 'text-red-600' : 'text-gray-900'}`}>
                            {isOpen3 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen3 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            A brief self description including your hobbies, personality, and any relevant information.
                        </div>
                    </div>
                </div>

                {/* Accordion 4 */}
                <div className="border-b border-gray-300">
                    <button
                        type="button"
                        className={`flex justify-between items-center w-full py-3 sm:py-4 text-lg sm:text-xl font-medium text-left ${
                            isOpen4 ? 'text-red-600' : 'text-gray-900'
                        }`}
                        onClick={() => setIsOpen4(!isOpen4)}
                    >
                        <span>Vision, Mission, and Motivation</span>
                        <span className={`${isOpen4 ? 'text-red-600' : 'text-gray-900'}`}>
                            {isOpen4 ? '−' : '+'}
                        </span>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isOpen4 ? 'max-h-40' : 'max-h-0'
                        }`}
                    >
                        <div className="py-3 text-sm sm:text-base md:text-lg text-gray-600">
                            Your vision, mission, and motivation for applying to this position.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Requirements;
