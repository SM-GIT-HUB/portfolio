import Image from "next/image"
import { Socials } from "../constants"
import Link from "next/link"

function Navbar() {
  const cls = "transition-all hover:p-[5px] hover:bg-[#ffffff0f] hover:h-full hover:rounded-full";

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image src={'/navlogo.svg'} alt="logo" width={65} height={65} className="cursor-pointer animate-sspin" />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Soumik Majumder
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center w-full max-h-[50px] h-auto justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 text-[17px]">
            <a href="#about-me" className={`cursor-pointer ${cls}`}>About</a>
            <a href="#skills" className={`cursor-pointer ${cls}`}>Skills</a>
            <a href="#projects" className={`cursor-pointer ${cls}`}>Projects</a>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center">
          {
            Socials.map((s) => (
              <Link href={s.link} key={s.name}>
                <Image src={s.src} alt={s.name} key={s.name} width={24} height={24}/>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar