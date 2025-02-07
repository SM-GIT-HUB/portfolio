'use client'

import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../utils/motion"
import { SparklesIcon } from "@heroicons/react/24/solid"


function SkillsText() {
  return (
    <motion.div initial="hidden" animate="visible" className="w-full h-auto flex flex-col items-center justify-center z-[1]">
      <motion.div variants={slideInFromTop} className="Welcome-box py-[8px] px-[8px] border border-[#7042f88b] opacity-[0.9]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5"/>
        <h1 className="Welcome-text text-[14px]">Always learning something new</h1>
      </motion.div>

      <motion.div variants={slideInFromLeft(0.5)} className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]" >
        Making apps with modern technologies
      </motion.div>

      <motion.a href="https://www.linkedin.com/in/soumik-majumder-08033b306/" variants={slideInFromRight(0.5)} className="py-2 px-[40px] button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
        Visit my Linkedin
      </motion.a>
    </motion.div>
  )
}

export default SkillsText