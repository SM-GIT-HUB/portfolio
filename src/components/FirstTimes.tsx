import React from 'react'
import ProjectCard from './ProjectCard'

function FirstTimes() {
  return (
    <div className='h-full w-full flex flex-col md:flex-row items-center gap-10 px-10 text-white'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-[20px] font-bold'>My first deployment</h1>
            <ProjectCard src='/firstdeploy.png' title='My first song' description='Deployed on Netlify, this little site always brings back memories.' link='https://somethingstupid.netlify.app/'/>
        </div>

        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-[20px] font-bold'>My first api using</h1>
            <ProjectCard src='/firstapi.png' title='Weather' description='Learnt using api for the first time. My functional web app.' link='https://weatherapp-o.netlify.app/'/>
        </div>
    </div>
  )
}

export default FirstTimes