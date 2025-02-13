'use client'

import { ClipboardCheck, Copy } from "lucide-react"
import { useState } from "react"

function CopyEmail() {
  const [show, setShow] = useState("copy");


  function copy()
  {
    setShow("check");
    window.navigator.clipboard.writeText("soumikmajumder02@gmail.com");
    setTimeout(() => setShow("copy"), 2000);
  }
    
  return (
    <div className="text-white flex gap-2 items-center cursor-pointer border-[2px] rounded-[4px] px-[20px] py-2 mb-10 bg-[#ffffff10] hover:bg-white/10 transition-all" onClick={copy}>
      <h1 className="text-[17px]">
        <span className="tracking-[4px]">Get my emai</span>
        <span>l</span>
      </h1>
      { show == "copy" && <Copy/> }
      { show == "check" && <ClipboardCheck/> }
    </div>
  )
}

export default CopyEmail