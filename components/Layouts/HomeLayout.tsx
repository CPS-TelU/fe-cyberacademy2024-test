import About from "../contents/About";
import HomeHero from "../contents/HomeHero";
import SectionContainer from "../utils/SectionContainer";
import Benefit from "../contents/Benefit";
import Knowledge from "../contents/Knowledge";
import Requirements from "../contents/Requirements";


const HomeLayout = () => {
    return (
        <div className="w-full">
            <SectionContainer fullWidth>
                <HomeHero />
                <About/>
                <Benefit/>
                <Knowledge/>
                <Requirements/>
            
            </SectionContainer>
        </div>
    );
};

export default HomeLayout;