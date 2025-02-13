import { footerLinks } from '../constants'
import Image from 'next/image'
import Link from 'next/link'
import CopyEmail from './CopyEmail'

function Footer() {
  return (
    <div className='flex flex-col items-center justify-center pb-10 z-[90] text-white gap-10'>
      <CopyEmail/>

      <div className='flex items-center justify-around w-full h-full'>
        {
          footerLinks.map((f) => (
            <Link href={f?.link} target='_blank' key={f.text} className='flex gap-[5px] hover:scale-110 transition-all'>
              <Image src={f.src} alt={f.text} height={24} width={24} />
              <h1 className='text-[0px] sm:text-[16px]'>{f.text}</h1>
            </Link>
          ))
        }
      </div>

      <h1>Made with ❤️ @2025</h1>
    </div>
  )
}

export default Footer