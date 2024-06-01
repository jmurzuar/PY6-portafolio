import React from 'react';

const getCurrentDate = () => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('es-ES', options);
};

const DateDisplay = () => {
  const currentDate = getCurrentDate();

  return (
    <h2>Hoy es {currentDate}</h2>
  );
}

export default DateDisplay;
