import { myProjects } from "../constants"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center pb-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {
          myProjects.map((p) => (
            <ProjectCard key={p.title} src={p.src} title={p.title} description={p.description} link={p.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects