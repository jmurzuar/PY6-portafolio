'use client';
import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Crear un elemento <a> y simular un clic para iniciar la descarga
    const link = document.createElement('a');
    link.href = '/cv-Juan-Urzua.pdf'; // Ruta relativa al archivo PDF en la carpeta public
    link.download = 'cv-Juan-Urzua.pdf'; // Nombre del archivo a descargar
    link.click();
  };

  return (
    <button onClick={handleDownload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Descargar Mi Currículum</button>
  );
};

export default DownloadButton;
