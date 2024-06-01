import DownloadButton from '@/components/downloadButton';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-start lg:pt-20 pt-16">
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
          <h1 className="text-2xl font-bold mb-2 text-blue-500">Sobre Mi</h1>
          <p className="text-justify text-blue-500"><strong>Soy Juan Urzúa Retamal</strong>, Ingeniero Informático titulado el 2014, desarrollador independiente en constante búsqueda de nuevos desafios. Entiendo la tecnología como una herramienta que mejora los procesos, entregando valor al negocio y en complemento con las personas, es por ello que mi trabajo diario es buscar soluciones simples pero de alto impacto en los resultados</p>

          <h1 className="text-2xl font-bold mt-4 text-blue-500">Experiencia y Nuevos Conocimientos</h1>
          <p className="mb-4 text-justify text-blue-500">Tengo 30 años de experiencia en el área Industrial, liderando proyectos y equipos de trabajo, soy testigo y un actor en la integración de las nuevas tecnologías en cada ámbito de trabajo, con una constante formación y aprendizaje que me permite ofrecer soluciones actualizadas y de alta calidad</p>

          <div className="lg:mb-14 mb-20">
          <DownloadButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
