import HomeHero from "../contents/HomeHero";
import SectionContainer from "../utils/SectionContainer";


const HomeLayout = () => {
    return (
        <div className="w-full">
            <SectionContainer fullWidth>
                <HomeHero />
            
            </SectionContainer>
        </div>
    );
};

export default HomeLayout;