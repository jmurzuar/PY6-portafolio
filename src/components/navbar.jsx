// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <div className="flex items-center bg-gray-800 p-4">
//       <div className="mr-4">
//         <Image
//           src="/image/logo.png"
//           alt="Logo"
//           width={50}
//           height={50}
//         />
//       </div>
//       <div className="flex space-x-4">
//         <Link href="/">
//           <p className="text-white hover:text-orange-600 cursor-pointer">Home</p>
//         </Link>

//         <Link href="/contacto">
//           <p className="text-white hover:text-orange-600 cursor-pointer">Contacto</p>
//         </Link>
//         <Link href="/catalogo">
//           <p className="text-white hover:text-orange-600 cursor-pointer">Catálogo</p>
//         </Link>
//         <Link href="/feedback">
//           <p className="text-white hover:text-orange-600 cursor-pointer">Feedback</p>
//         </Link>
//         <Link href="/about">
//           <p className="text-white hover:text-orange-600 cursor-pointer">About</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ManuscriptText from './manuscriptText';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getLinkClass = (path) => {
    return pathname === path
      ? 'bg-orange-600 text-white rounded-lg px-4 py-2 cursor-pointer'
      : 'text-white hover:bg-orange-600 hover:text-white rounded-lg px-4 py-2 cursor-pointer';
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50">
      <div className="flex justify-between items-center">
        <div className="mr-4">
        <ManuscriptText />
          {/* <Image
            src="/image/logo1.png"
            alt="Logo"
            width={50}
            height={50}
          /> */}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <Link href="/" className={getLinkClass('/')}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass('/about')}>
            Acerca de mí
          </Link>
          <Link href="/habilidades" className={getLinkClass('/habilidades')}>
            Habilidades
          </Link>
          <Link href="/portafolio" className={getLinkClass('/portafolio')}>
            Potafolio
          </Link>
          <Link href="/contacto" className={getLinkClass('/contacto')}>
            Contacto
          </Link>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col space-y-4">
          <Link href="/" className={getLinkClass('/')} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className={getLinkClass('/about')} onClick={closeMenu}>
            Acerca de mí
          </Link>
          <Link href="/habilidades" className={getLinkClass('/habilidades')} onClick={closeMenu}>
            Habilidades
          </Link>
          <Link href="/portafolio" className={getLinkClass('/portafolio')} onClick={closeMenu}>
            Portafolio
          </Link>
          <Link href="/contacto" className={getLinkClass('/contacto')} onClick={closeMenu}>
            Contacto
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;



