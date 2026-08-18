"use client"
import '../globals.css';
import Navbar from "@/components/Navbar";
import Form from "@/components/Form";
import Footer from '@/components/Footer';
import Socials from "@/components/Socials";
 

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-black'>
      <div className="bg-black w-[85%] lg:w-[75%] mt-12 mb-12">
      <Navbar />

      <div className='mt-24 mb-24 lg:mb-0 flex flex-col gap-8'>
        <div className='flex flex-col justify-center items-center gap-5 mb-12 text-center'>
          <h1 className='text-6xl lg:text-7xl text-[#00FFFF] font-bold'>Contact Me!</h1>
          <h1 className='text-xl lg:text-2xl text-white font-bold'>Reach me via these various platforms!</h1>
          <div className='flex flex-col justify-center items-center text-center gap-3'>
            <h1 className='text-md lg:text-xl text-white'>ellysonolegario@gmail.com</h1>
            <h1 className='text-md lg:text-xl text-white'>hubert.olegario@student.ateneo.edu</h1>
            <Socials />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-xl lg:text-2xl text-white text-center font-bold'>Answer the form below!</h1>
          <Form />
        </div>
      </div>
      
      <Footer />
      </div>
    </div>
  );
}
