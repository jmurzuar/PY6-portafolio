import MiBoton2 from '@/components/boton2'
import ProfileCard from '@/components/profileCard'
import Head from 'next/head'
import React from 'react'

const page = () => {
  return (
    //   <div className="min-h-screen flex items-center justify-center">
    //   <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
    //     <h1 className="text-2xl font-bold mb-4">Página de Feedback</h1>
    //     <p className="text-gray-700">Aquí va el Formulario de Feedback</p>
    //   </div>
    // </div>

    <div>
      <h1 className="text-center text-3xl font-bold mt-28 mb-2 text-blue-500">Mis Proyectos</h1>
      <main className="mt-4 flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProfileCard
            imageUrl="/image/landing.png"
            name="Landing de Negocio HTML5-CSS"
            githubUrl="https://github.com/jmurzuar/PY1-Landing-Venta"
            websiteUrl="https://py1-landing-venta-juan-urzua.netlify.app/"
            icons={[
              '/image/html.png',
              '/image/css.png',
              '/image/github.png',
              '/image/bootstrap.png',
              '/image/netlify.png',
            ]}
          />
          <ProfileCard
            imageUrl="/image/crud.png"
            name="Aplicación CRUD"
            githubUrl="https://github.com/jmurzuar/PY2-CRUD_APP"
            websiteUrl="https://py2-crud-juan-urzua.netlify.app/"
            icons={[
              '/image/html.png',
              '/image/css.png',
              '/image/js.png',
              '/image/github.png',
              '/image/netlify.png',
            ]}
          />
        </div>


      </main>

      <main className="mt-10 flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ProfileCard
            imageUrl="/image/api.png"
            name="Tablero de Datos (Dashboard)"
            githubUrl="https://github.com/jmurzuar/PY3-API"
            websiteUrl="https://py3-api-juan-urzua.netlify.app/"
            icons={[
              '/image/html.png',
              '/image/css.png',
              '/image/js.png',
              '/image/github.png',
              '/image/netlify.png',
            ]}
          />
          <ProfileCard
            imageUrl="/image/restaurant.png"
            name="Aplicación Restaurante"
            githubUrl="https://github.com/jmurzuar/PY4-Restaurante"
            websiteUrl="https://py4-restaurante.netlify.app/"
            icons={[
              '/image/html.png',
              '/image/css.png',
              '/image/js.png',
              '/image/github.png',
              '/image/firebase.png',
              '/image/netlify.png',
            ]}
          />
        </div>


      </main>

      <main className="mt-10 mb-28 flex justify-center items-center">
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-1 gap-6">
          <ProfileCard
            imageUrl="/image/ecomerce.png"
            name="Aplicación de Comercio Electrónico"
            githubUrl="https://github.com/jmurzuar/PY5-client"
            websiteUrl="https://py-5-client.vercel.app/"
            icons={[
              '/image/react.png',
              '/image/tailwind.png',
              '/image/github.png',
              '/image/mongo.png',
              '/image/mp.png',
              '/image/vercel1.png',
            ]}
          />

        </div>


      </main>


    </div>

  )
}
export default page