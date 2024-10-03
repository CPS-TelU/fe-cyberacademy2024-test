import About from "../contents/About";
import HomeHero from "../contents/HomeHero";
import SectionContainer from "../utils/SectionContainer";
import Benefit from "../contents/Benefit";


const HomeLayout = () => {
    return (
        <div className="w-full">
            <SectionContainer fullWidth>
                <HomeHero />
                <About/>
                <Benefit/>
            
            </SectionContainer>
        </div>
    );
};

export default HomeLayout;