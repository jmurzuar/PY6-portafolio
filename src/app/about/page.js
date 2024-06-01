import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start pt-20">
      <div className="flex flex-col lg:flex-row lg:items-start ml-2 p-10">
        <div className="hidden lg:block lg:w-1/8">
          <Image
            src="/image/reducida.jpg" // Asegúrate de que la ruta a la imagen sea correcta
            alt="Sobre Mi" 
            width={200}
            height={200}
            className="rounded-lg"
          />
        </div>
        
        <div className="lg:w-3/4 lg:ml-4 mt-4 lg:mt-0">
          <h1 className="text-2xl font-bold mb-2">Sobre Mi</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque quis esse fuga enim omnis numquam unde porro, facilis rem animi natus aliquid quae distinctio totam, maxime nam laboriosam ipsa. Tenetur eos repellendus officiis ut excepturi qui minus ex id ducimus, ab et repellat est maxime asperiores suscipit voluptatum vero temporibus quasi numquam placeat animi. Eligendi, corporis perferendis? Expedita, porro?</p>

          <h1 className="text-2xl font-bold mt-4">Sobre Mi</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque quis esse fuga enim omnis numquam unde porro, facilis rem animi natus aliquid quae distinctio totam, maxime nam laboriosam ipsa. Tenetur eos repellendus officiis ut excepturi qui minus ex id ducimus, ab et repellat est maxime asperiores suscipit voluptatum vero</p>

          <div className="lg:mb-14">
          <DownloadButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
