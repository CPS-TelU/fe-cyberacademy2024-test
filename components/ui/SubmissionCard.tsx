"use client";
import React from 'react';
import Link from 'next/link';

interface SubmissionCardProps {
    status: string;
    timeRemaining: string;
}

const SubmissionCard: React.FC<SubmissionCardProps> = ({ status, timeRemaining }) => {
    return (
        <div className="flex items-center justify-center ">
        <div className="bg-white shadow-md rounded-lg p-6 w-11/12 sm:w-[500px] md:w-[700px] lg:w-[1000px] xl:w-[1155px] ">
            <div className="mb-4"> {/* Margin below the button to separate from the header */}
                <Link href="/lms/mycourses/coursedetail/assignment/addassignment">
                <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300">
                    Add Submission
                </button>
                </Link>
            </div>
            <h2 className="text-xl font-semibold text-red-600">Submission Status</h2>
            <table className="min-w-full mt-4">
                <tbody>
                    <tr>
                        <td className="border border-black px-4 py-2">Submission status</td>
                        <td className="border border-black px-4 py-2">{status}</td>
                    </tr>
                    <tr>
                        <td className="border border-black px-4 py-2">Time remaining</td>
                        <td className="border border-black px-4 py-2">{timeRemaining}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default SubmissionCard;
