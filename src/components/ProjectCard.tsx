import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

function ProjectCard({ src, title, description, link }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>

      {
        link &&
        <div className="opacity-0 group-hover:opacity-100 flex text-white absolute z-[20] h-full w-full inset-0 items-center justify-center bg-black/70 transition-all">
          <Link href={link} target="_blank" className="px-4 py-2 rounded-full border-[2px] border-white font-semibold hover:bg-white/5 transition-all">
            <span className="tracking-[3px]">Visi</span>
            <span>t</span>
          </Link>
        </div>
      }
    </div>
  )
}

export default ProjectCard