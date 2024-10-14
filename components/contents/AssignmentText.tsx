// contents/AssignmentText.tsx
import React from 'react';

const AssignmentText: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600">Assignment 1</h1>
      <div className="mt-4">
        <div className="flex items-center mb-2">
          <span className="text-red-600 font-bold">Assignment 1.pdf</span>
        </div>
        <p className="text-gray-700">
          <strong>Opened:</strong> Thursday, 31 October 2024, 6:00 PM<br />
          <strong>Closed:</strong> Monday, 4 November 2024, 5:00 PM
        </p>
      </div>
    </div>
  );
};

export default AssignmentText;
