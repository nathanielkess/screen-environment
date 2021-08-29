import React from 'react';

type Props = {
  title: string;
};

export const Criteria: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="criteria">
      <h2>Criteria</h2>
      {children}
    </div>
  );
};
