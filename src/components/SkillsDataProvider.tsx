'use client'

import Image from "next/image"

interface Props {
  src: string;
  width: number;
  height: number;
  index: number
}

function SkillsDataProvider({ src, width, height, index }: Props) {
  return (
    <Image src={src} width={width} height={height} alt="skills" className="hover:scale-110 z-[20] transition-all" />
  )
}

export default SkillsDataProvider