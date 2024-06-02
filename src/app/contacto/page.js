// import React from 'react'

// const page = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//     <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Página del Contacto</h1>
//       <p className="text-gray-700">Aquí va el formulario de Contacto</p>
//     </div>
//   </div>
//   )
// }
// export default page


import ContactInfo from '@/components/contactInfo';
import Head from 'next/head';


export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Contacto - Juan Urzúa</title>
        <meta name="description" content="Información de contacto de Juan Urzúa" />
      </Head>

      <main>
        <h1 className="text-center text-3xl font-bold mt-24 text-blue-500">Información de Contacto</h1>
        <ContactInfo />
      </main>
    </div>
  );
}