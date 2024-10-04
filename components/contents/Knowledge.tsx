import React from 'react';


const knowledgeItems = [
    { image: './castle.png', title: 'Basic Linux' },
    { image: './', title: 'Website Development' },
    { image: 'path/to/iot-icon.png', title: 'Internet of Things' },
    { image: 'path/to/iot-icon.png', title: 'Internet of Things' },
    { image: 'path/to/ml-icon.png', title: 'Machine Learning' },
];



const Knowledge = () => {
    return (
        <section className="p-14 mt-6 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Section: Title and two images in the first row */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Title */}
                    <div className="sm:col-span-2 md:col-span-1 text-left w-[400px]">
                        <h2 className="text-6xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl  font-bold text-gray-800">
                            The <span className="gradient-text">Knowledge</span> you will learn
                        </h2>
                    </div>

                    {/* First two images */}
                    {knowledgeItems.slice(0, 2).map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center w-[400px]">
                            <img src={item.image} alt={item.title} className="w-20 h-20 mb-4 mx-auto" />
                            <h3 className="text-4xl font-bold gradient-text">{item.title}</h3> 
                        </div>
                    ))}
                </div>

                {/* Second row with three images */}
                <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {knowledgeItems.slice(2).map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg text-center w-[400px]">
                            <img src={item.image} alt={item.title} className="w-16 h-16 mb-4 mx-auto" />
                            <h3 className="text-4xl font-bold gradient-text">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Knowledge;
