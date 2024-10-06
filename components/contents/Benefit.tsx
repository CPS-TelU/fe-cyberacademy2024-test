import { BenefitCard } from "./BenefitCard"


const Benefit = () => {

    return (
        <section className="p-12">
            <div>
                <h1 className="text-6xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-6xl font-bold items-center text-center">
                    What's the<span className="gradient-text"> Benefit</span> you ask?</h1>
            </div>
            <BenefitCard/>
            
        </section>

    )
}
export default Benefit