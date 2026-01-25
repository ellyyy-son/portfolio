import '../app/globals.css';
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { useState } from 'react';


export default function Navbar() {
  return (
    <>
      {/* Desktop / FullNav */}
      <div className="hidden lg:flex w-full">
        <FullNav />
      </div>

      {/* Mobile / SmallNav */}
      <div className="flex lg:hidden w-full">
        <SmallNav />
      </div>
    </>
  );
}

// FullNav
function FullNav() {
  return (
    <nav className="flex flex-row items-center justify-between bg-black w-full">
      <div className="flex items-center">
        <CiStar size={60} className="text-[#00f0ff]" />
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <Link
          href=""
          className="text-xl text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF]"
        >
          Professional
        </Link>
        <Link
          href=""
          className="text-xl text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF]"
        >
          Personal
        </Link>
        <Link
          href=""
          className="text-xl text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}


function SmallNav(){
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="shadow-md bg-black left-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <CiStar size={60} className="text-[#00f0ff]" />
      </div>

        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-4 items-center justify-center p-4">
          <li><a href="" className="text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF] font-bold">Professional</a></li>
          <li><a href="" className="text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF] font-bold">Personal</a></li>
          <li><a href="" className="text-white hover:underline hover:underline-offset-8 hover:text-[#00FFFF] font-bold">Contact</a></li>
        </ul>
      )}
    </div>
  );
}
