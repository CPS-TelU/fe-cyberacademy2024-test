// ui/AssignmentCard.tsx
import React from 'react';

const AssignmentCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      {children}
    </div>
  );
};

export default AssignmentCard;
