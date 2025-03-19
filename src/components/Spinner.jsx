import React from 'react';

export const Spinner = () => {
  return (
    <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
