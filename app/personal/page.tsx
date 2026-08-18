"use client"
import '../globals.css';
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import Footer from '@/components/Footer';
import Socials from "@/components/Socials";
import Earth from '@/components/graphs/Earth';
import Pics from '@/components/Pics';
 

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-black'>
      <div className="bg-black w-[85%] lg:w-[75%] mt-12 mb-12">
      <Navbar />

      <div className='mt-24 mb-24 lg:mb-0 flex flex-col gap-8'>

        <div className='flex flex-col gap-6 justify-center items-center'>
          <h1 className='text-3xl lg:text-5xl font-bold text-center text-white'>Hello again! I am</h1>
          <h1 className='text-6xl lg:text-7xl text-[#00FFFF] font-bold text-center'>Elly</h1>
        </div>
        
      </div>
      
      <Footer />
      </div>
    </div>
  );
}
