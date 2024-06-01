'use client';
import React from 'react';

const ClientButton = ({text}) => {
  const handleClick = () => {
    alert('Go button Clikeado!');
  };

  return (
    <button className="bg-orange-500 text-white w-44 rounded-md py-2 mx-2 hover:bg-slate-900 m-6" onClick={handleClick}>
      {text} 
      </button>
  );
};

export default ClientButton;