// components/ContactInfo.js
import React from 'react';

const contact = {
  name: 'Juan Manuel Urzúa Retamal',
  Formación: 'Ingeniero Informático',
  email: 'jmurzuar@gmail.com',
  phone: '+1234567890',
  github: 'https://github.com/jmurzuar',
  linkedin: 'https://linkedin.com/in/juanurzua',

};

const ContactInfo = () => {
  return (
    <div className="overflow-x-auto mt-20">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 py-2 px-4">Campo</th>
            <th className="w-4/5 py-2 px-4">Información</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="bg-gray-100 border-b">
            <td className="py-2 px-4">Nombre</td>
            <td className="py-2 px-4">{contact.name}</td>
          </tr>
          <tr className="bg-gray-100 border-b">
            <td className="py-2 px-4">Email</td>
            <td className="py-2 px-4">{contact.email}</td>
          </tr>
          <tr className="bg-gray-100 border-b">
            <td className="py-2 px-4">Teléfono</td>
            <td className="py-2 px-4">{contact.phone}</td>
          </tr>
          <tr className="bg-gray-100 border-b">
            <td className="py-2 px-4">GitHub</td>
            <td className="py-2 px-4">
              <a href={contact.github} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {contact.github}
              </a>
            </td>
          </tr>
          <tr className="bg-gray-100 border-b">
            <td className="py-2 px-4">LinkedIn</td>
            <td className="py-2 px-4">
              <a href={contact.linkedin} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {contact.linkedin}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactInfo;
