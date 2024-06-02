// import React from 'react'
// import ClientButton from '@/components/boton'
// import DateDisplay from '@/components/date'

// import MiBoton2 from '@/components/boton2'
// import SkillProgressComponent from '@/components/skill'
// import ProfileCard from '@/components/profileCard'
// import ManuscriptText from '@/components/manuscriptText'

// const page = () => {
//   return (
//     <div className='text-center mx-auto m-6'>
//       <div>Pagina de Inicio</div>
//       <DateDisplay />
//       <ClientButton text="Aca va el boton"/>
//       <MiBoton2 text="Botón 2" mensaje="Mensaje del botón" color="bg-blue-500"/>
//       <MiBoton2 text="Botón 3" mensaje="Mensaje del botón 4" color="bg-yellow-500"/>
//       <MiBoton2 text="Botón 4" mensaje="Mensaje del botón 4"/>
//       <MiBoton2 text="Botón 5"/>


      
//     </div>
//   )
// }

// export default page

import Image from 'next/image';

const BackgroundPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -mr-72 sm:-m-0">
        <Image
          src="/image/quiensoy3.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right" // align the image to the right
          quality={100}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex items-end h-full justify-left pb-32 pl-5 pr-5 lg:pb-10 lg:justify-left lg:items-center lg:pl-10">
        <div className="bg-gray-700 bg-opacity-75 text-white p-8 rounded-lg">
          <h1 className="text-4xl font-bold">Un Profesional para tu Proyecto</h1>
          <p className="hidden lg:block mt-4">
          &quot;La perfección es el resultado de pequeños detalles hechos bien.&quot;
            <br />
            <span className="block text-right">
              <strong>Michelangelo</strong>
            </span>
          </p>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
  );
};

export default BackgroundPage;