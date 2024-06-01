import SkillProgressComponent from '@/components/skill'
import React from 'react'

const page = () => {
  return (
    <>
    <h1 className="text-center text-3xl font-bold mt-28 mb-2 text-blue-500">Uso de tecnologías</h1>
      <p className="text-center text-1xl mb-2 pl-5 pr-5 text-blue-500">Resumen porcentual del uso de las distintas tecnologías para el desarrollo de aplicaciones</p>

    <div className="min-h-screen flex items-center justify-center pb-32">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <SkillProgressComponent iconUrl="/image/nextjs.svg" percentage={50} techName="Next.js" />
        <SkillProgressComponent iconUrl="/image/react.png" percentage={50} techName="React" />
        <SkillProgressComponent iconUrl="/image/github.png" percentage={70} techName="GitHub" />
        <SkillProgressComponent iconUrl="/image/node.png" percentage={50} techName="Node.js" />
        <SkillProgressComponent iconUrl="/image/html.png" percentage={90} techName="HTML" />
        <SkillProgressComponent iconUrl="/image/mp.png" percentage={40} techName="Mercado Pago" />
        <SkillProgressComponent iconUrl="/image/css.png" percentage={70} techName="CSS" />
        <SkillProgressComponent iconUrl="/image/bootstrap.png" percentage={50} techName="Bootstrap" />
        <SkillProgressComponent iconUrl="/image/tailwind.png" percentage={30} techName="Tailwind" />
        <SkillProgressComponent iconUrl="/image/php2.png" percentage={70} techName="PHP" />
        <SkillProgressComponent iconUrl="/image/mysql.png" percentage={70} techName="MySQL" />
        <SkillProgressComponent iconUrl="/image/mongo.png" percentage={40} techName="MongoDB" />
        <SkillProgressComponent iconUrl="/image/firebase.png" percentage={40} techName="Firebase" />
        
      </div>
    </div>
    </>
  )
}

export default page