// layouts/AddAssignmentPage.tsx
import React from 'react';
import AssignmentText from '../contents/AssignmentText';
import SubmissionText from '../contents/SubmissionText';
import AssignmentCard from '../ui/AddAssignmentCard';
import SubmissionCard from '../ui/AddSubmissionCard';

const AddAssignmentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <AssignmentCard>
          <AssignmentText />
        </AssignmentCard>
        <SubmissionCard>
          <SubmissionText />
          <div className="border-2 border-dashed border-gray-400 p-4 rounded-lg flex flex-col items-center mt-4">
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Save changes</button>
          </div>
        </SubmissionCard>
      </div>
    </div>
  );
};

export default AddAssignmentPage;
