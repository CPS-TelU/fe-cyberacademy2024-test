import React from 'react';

interface AssignmentCardProps {
    title: string;
    details: React.ReactNode;
    openDate: string;
    closeDate: string;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ title, details, openDate, closeDate }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mt-8 mx-auto w-11/12 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1155px]">
            <div className="text-left">
                <h1 className="text-2xl font-semibold text-red-600">{title}</h1>
                <div className="mt-1">
                    <p>{details}</p>
                    <p className="mt-2">Opened: {openDate}</p>
                    <p>Closed: {closeDate}</p>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;
