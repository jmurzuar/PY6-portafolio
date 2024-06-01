import SkillProgressComponent from '@/components/skill'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      

      <SkillProgressComponent iconUrl="/image/nextjs.svg" percentage={75} />
      <SkillProgressComponent iconUrl="/image/react.png" percentage={50} />
      <SkillProgressComponent iconUrl="/image/github.png" percentage={90} />
      <SkillProgressComponent iconUrl="/image/node.png" percentage={50} />
      <SkillProgressComponent iconUrl="/image/html.png" percentage={90} />

    </div>
  )
}

export default page