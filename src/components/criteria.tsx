import React from 'react';

export const Criteria: React.FC = ({ children }) => {
  return (
    <div className="criteria">
      <h2>Criteria</h2>
      {children}
    </div>
  );
};
