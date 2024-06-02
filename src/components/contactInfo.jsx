// components/ContactInfo.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const contact = {
  name: 'Juan Manuel Urzúa Retamal',
  formación: 'Ingeniero Informático',
  email: 'jmurzuar@gmail.com',
  phone: '+1234567890',
  github: 'https://github.com/jmurzuar',
  linkedin: 'https://www.linkedin.com/in/urzua-juan-b06b39a9',
  photo: '/image/foto.jpg', // Replace with the actual path to your photo
};

const ContactInfo = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-4 mb-24">
      <div className="flex justify-center mt-4">
        <Image
          className="rounded-full"
          src={contact.photo}
          alt="Profile Photo"
          width={150}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold text-blue-500">{contact.name}</h2>
        <p className="text-blue-500">{contact.formación}</p>



        <div className="mt-4 text-blue-500 px-6">
          <div className="flex items-center justify-center mt-2">
            <Image src="/image/correo.png" alt="Email Icon" width={20} height={20} />
            <p className="ml-2">{contact.email}</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <Image src="/image/wsp.png" alt="Phone Icon" width={20} height={20} />
            <p className="ml-2">{contact.phone}</p>
          </div>
        </div>
      </div>



      <div className="flex justify-center mt-4 mb-4 gap-10">
        <Link href={contact.github} className="text-blue-500 hover:text-blue-700 mx-2" target="_blank" rel="noopener noreferrer">
        <Image src="/image/lkd.png" alt="LinkedIn Icon" width={50} height={50} className="transform transition-transform duration-500 ease-in-out hover:scale-110"/>
        </Link>
        <Link href={contact.linkedin} className="text-blue-500 hover:text-blue-700 mx-2" target="_blank" rel="noopener noreferrer">
        <Image src="/image/git2.png" alt="Github Icon" width={50} height={50} className="transform transition-transform duration-500 ease-in-out hover:scale-110"/>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;

