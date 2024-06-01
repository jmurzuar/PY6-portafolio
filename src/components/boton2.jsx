'use client';
import React from 'react';

const MiBoton2 = ({text, mensaje, color}) => {
  
const mensaje_ok = mensaje ? `${mensaje}` : 'sin mensaje';

    
  const handleClick = () => {
    alert(`soy el ${text}\ny tengo el siguiente mensaje: ${mensaje_ok}`);
  };

  const backgroundColorClass = color ? `${color}` : 'bg-orange-500';
  const buttonClass = `${backgroundColorClass} text-white w-44 rounded-md py-2 mx-2 hover:bg-slate-900 m-6`;
//   const buttonClass = `${color} || ${color}  || 'bg-orange-500 text-white w-44 rounded-md py-2 mx-2 hover:bg-slate-900 m-6`;

  return (
    <button className={buttonClass} onClick={handleClick}>
      {text} 
      </button>
  );
};

export default MiBoton2;