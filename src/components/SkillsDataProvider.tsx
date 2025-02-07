'use client'

import { delay, motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

interface Props {
  src: string;
  width: number;
  height: number;
  index: number
}

function SkillsDataProvider({ src, width, height, index }: Props) {
  const [ref, inView] = useInView({
    triggerOnce: true
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const animationDelay = 0.3;

  return (
    <motion.div ref={ref} initial="hidden" variants={imageVariants} animate={inView? "visible" : "hidden"} custom={index} transition={{delay: index * animationDelay}}>
      <Image src={src} width={width} height={height} alt="skills" />
    </motion.div>
  )
}

export default SkillsDataProvider