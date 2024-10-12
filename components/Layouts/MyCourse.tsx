import React from 'react';
import MyCourseCard from '../contents/MyCourseCard';
import SectionContainer from "../utils/SectionContainer";
const MyCoursesPage: React.FC = () => {
  return (
    <div className="w-full">
        <SectionContainer fullWidth>
            <MyCourseCard />
        </SectionContainer>
    </div>
  );
};

export default MyCoursesPage;
