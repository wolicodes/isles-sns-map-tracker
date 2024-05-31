import React from 'react';

const ResetButton: React.FC = () => {
  const handleReset = () => {
    localStorage.clear();
    window.location.reload();
  };

  return <button onClick={handleReset}>Clear everything</button>;
};

export default ResetButton;
