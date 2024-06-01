// import Image from 'next/image';
// import Link from 'next/link';

// const ProfileCard = ({ imageUrl, name, githubUrl, websiteUrl, icons }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="flex justify-center p-4">
//       <div className="w-full h-48 relative">
//           <Image className="rounded-lg" src={imageUrl} alt={name} layout="fill" objectFit="contain" />
//         </div>
//       </div>
//       <div className="p-4">
//         <h2 className="text-center text-xl font-bold">{name}</h2>
//         <div className="text-center mt-2">
//           <Link href={githubUrl} className="text-blue-500 hover:underline">GitHub</Link>
//         </div>
//         <div className="text-center mt-2">
//           <Link href={websiteUrl} className="text-blue-500 hover:underline">Website</Link>
//         </div>
//         <div className="flex justify-center mt-4 space-x-2">
//           {icons.slice(0, 5).map((icon, index) => (
//             <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;

import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = ({ imageUrl, name, githubUrl, websiteUrl, icons }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center p-4">
        <div className="w-full h-48 relative">
          <Image className="rounded-lg" src={imageUrl} alt={name} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-center text-xl font-bold">{name}</h2>
        <div className="flex justify-center mt-4 space-x-4">
          <Link href={githubUrl} passHref target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">GitHub</button>
        
          </Link>
          <Link href={websiteUrl} passHref target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Website</button>
          </Link>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {icons.slice(0, 6).map((icon, index) => (
            <image key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

