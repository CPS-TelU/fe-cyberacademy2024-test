// contents/SubmissionText.tsx
import React from 'react';

const SubmissionText: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600">Add Submission</h1>
      <p className="text-gray-500">
        You can drag and drop files here to add them.
      </p>
    </div>
  );
};

export default SubmissionText;
