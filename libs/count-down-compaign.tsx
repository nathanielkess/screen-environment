import React, { FC, useState } from 'react';

const fullCenter = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  height: 400
};

const counter = {
  backgroundColor: '#4CAF50',
  width: 80,
  height: 80,
  borderRadius: 20,
  borderWidth: 0,
  fontWeight: 900,
  color: '#ffffff'
};

export const CountDownCampaign: FC = () => {
  const [count, setCount] = useState<number | string>(10);

  const handleClick = () =>
    setCount(prev => {
      return typeof prev === 'number' && prev > 1 ? prev - 1 : 'Winner!';
    });

  return (
    <div style={fullCenter}>
      <button onClick={handleClick} style={counter}>
        <p>{count}</p>
      </button>
    </div>
  );
};
