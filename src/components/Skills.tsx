import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from "../constants"
import SkillsDataProvider from "./SkillsDataProvider"
import SkillsText from "./SkillsText"

function Skills() {
  return (
    <section id='skills' style={{transform: "scale(0.9"}} className='flex flex-col items-center justify-center gap-5 h-full relative overflow-hidden z-[20]'>
      <SkillsText/>

      <div className="border rounded-[4px] bg-[#ffffff09]">
        <div className="text-white flex flex-col items-center">
          <div className="flex flex-row justify-around flex-wrap my-2 px-2 gap-5 items-center">
            {
              Skill_data.map((f, idx) => (
                <SkillsDataProvider key={f.skill_name} src={f.Image} width={f.width - 20} height={f.height - 20} index={idx} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="border rounded-[4px] bg-[#ffffff09]">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-[20px]">Frontend</h1>
          <div className="flex flex-row justify-around flex-wrap mb-2 px-2 gap-5 items-center">
            {
              Frontend_skill.map((f, idx) => (
                <SkillsDataProvider key={f.skill_name} src={f.Image} width={f.width} height={f.height} index={idx} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="border rounded-[4px] bg-[#ffffff09]">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-[20px]">Backend</h1>
          <div className="flex flex-row justify-around flex-wrap mb-2 px-2 gap-5 items-center">
            {
              Backend_skill.map((f, idx) => (
                <SkillsDataProvider key={f.skill_name} src={f.Image} width={f.width} height={f.height} index={idx} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="border rounded-[4px] bg-[#ffffff09]">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-[20px]">Full Stack</h1>
          <div className="flex flex-row justify-around flex-wrap mb-2 px-2 gap-5 items-center">
            {
              Full_stack.map((f, idx) => (
                <SkillsDataProvider key={f.skill_name} src={f.Image} width={f.width} height={f.height} index={idx} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="border rounded-[4px] bg-[#ffffff09]">
        <div className="text-white flex flex-col items-center">
          <h1 className="text-[20px]">Others</h1>
          <div className="flex flex-row justify-around flex-wrap mb-2 px-2 gap-5 items-center">
            {
              Other_skill.map((f, idx) => (
                <SkillsDataProvider key={f.skill_name} src={f.Image} width={f.width} height={f.height} index={idx} />
              ))
            }
          </div>
        </div>
      </div>

      <div className="h-full w-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video src={'/cards-video.webm'} className="w-full h-auto" preload="false" playsInline loop muted autoPlay />
        </div>
      </div>
    </section>
  )
}

export default Skills