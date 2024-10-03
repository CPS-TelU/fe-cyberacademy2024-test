import Image from 'next/image'

const About = () => {

    return (
        <section className="py-20">
            <div>
                <h1 className="text-5xl font-bold items-center text-center">
                    What is <span className="gradient-text">Cyber Academy</span> ?
                </h1>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 px-12 ">
                    <Image 
                        src="/castle.png" // Ganti dengan path gambar yang benar
                        alt="Cyber Academy Castle"
                        width={1000} 
                        height={1000} 
                        className="w-[700px] h-[500px]"
                    />
                    </div>
                <div className="md:w-1/2 p-8 px-12">
                    <p className="text-2xl font-medium leading-relaxed">
                    Welcome to <span className="gradient-text">Cyber Academy</span>, where learning becomes a grand adventure! Here, innovation thrives, teamwork reigns, 
                    and every new face adds to a rich tapestry of knowledge. The journey is filled with excitement and wonder. So, will you follow the white rabbit down the rabbit hole ?
                    </p>
               </div>
            </div>
        </section>
    )
}

export default About