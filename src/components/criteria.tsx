import React, { FC } from 'react';

export const Criteria: FC = ({ children }) => {
  return (
    <div className="criteria">
      <h2>Criteria</h2>
      {children}
    </div>
  );
};
