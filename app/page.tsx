"use client"
import './globals.css';
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import TimelineChart from "../components/Timeline";
import { IoSchoolOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { GrSend } from "react-icons/gr";
 

export default function Home() {
  return (
    <div className='flex flex-col items-center bg-black'>
      <div className="min-h-screen font-sans bg-black max-w-[75%] mt-12 mb-12">
       <Navbar />

        <div className='min-h-[80vh] mt-24 mb-24 lg:mb-0'>
          <div className="flex flex-col-reverse gap-20 lg:flex-row justify-between items-center text-white">
            <div className='flex flex-col items-center justify-center lg:items-start'>
              <h1 className='text-lg lg:text-xl'>Aspiring Data Scientist</h1>
              <h1 className='text-4xl lg:text-6xl mt-4 font-bold text-center'>Hello! I am</h1>
              <h1 className='text-6xl lg:text-7xl mt-4 text-[#00FFFF] font-bold'>Elly</h1>
              <h1 className='text-6xl lg:text-7xl mt-4 text-[#00FFFF] font-bold'>Olegario</h1>
              <h1 className='text-md lg:text-lg mt-10 text-center'>3 BS Computer Science | From the Philippines</h1>
              <div className='flex flex-col lg:flex-row items-center lg:gap-10'>
                <button onClick={() => window.open('/resume.pdf', '_blank')} className='border border-amber-50 p-4 rounded-4xl mt-10 w-4xs lg:w-3xs hover:bg-[#00FFFF]/80 hover:text-black text-md lg:text-xl font-bold'> 
                  View CV &gt;
                </button>
                <Socials />
              </div>
            </div>
            <img className='h-4/5 w-4/5 md:h-3/5 md:w-3/5 lg:h-2/5 lg:w-2/5 rounded-full object-cover outline-6 lg:outline-8 outline-[#00f0ff] outline-offset-12' src={'/pic.jpg'}/>
          </div>
        </div>

        
        <div className='flex flex-col gap-32'>
          <div className='flex flex-col items-center gap-12'>
            <div className='flex flex-row items-center gap-8'>
              <FaRegIdCard size={40} className='text-[#00f0ff]'/>
              <h1 className='text-4xl lg:text-5xl font-bold text-white'>Profile</h1>
            </div>
            <div className='text-white flex flex-col gap-8 items-center justify-center text-center text-sm  lg:text-lg'>
              <h1>I’m a current 3rd Year Computer Science student and an aspiring Data Scientist with a strong interest in turning data into meaningful insights. I enjoy working on problems that involve analysis, pattern recognition, and building data-driven solutions.</h1>
              <h1>Currently, I’m focused on improving my skills in Python, data analysis, machine learning, and big data methodologies while building projects that emphasize clarity, correctness, and real-world applicability.</h1>
              <h1>I’m actively looking for opportunities where I can learn from experienced teams and contribute to impactful, data-focused projects.</h1>

              <div className='mt-8'>
                <h1 className='text-3xl font-bold mb-8 text-center'>Skills</h1>
                <Skills />
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-12'>
            <div className='flex flex-row items-center gap-8'>
              <IoSchoolOutline size={40} className='text-[#00f0ff]'/>
              <h1 className='text-4xl lg:text-5xl font-bold text-white'>Education</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-20  items-stretch justify-center'>
              <div className="border p-6 rounded-lg shadow-lg text-white text-center hover:bg-[#00f0ff]/50">
                <h1 className='font-bold mb-2 text-xl text-[#00FFFF]'>High School Diploma</h1>
                <h1 className='mb-4'>Academic Track - Science, Technology, Engineering, and Mathematics (STEM)</h1>
                <h1 className='font-bold text-[#b9c8fa]'>Quezon City Science High School</h1>
                <h1>June 2017 - July 2023</h1>
              </div>

              <div className="border p-6 rounded-lg shadow-lg text-white text-center  hover:bg-[#00f0ff]/50">
                <h1 className='font-bold mb-2 text-xl text-[#00FFFF]'>BS Computer Science</h1>
                <h1 className='mb-4'>Double Specialization in Data Science and Analytics (DSA) and Enterprise Systems (ES)</h1>
                <h1 className='font-bold text-[#b9c8fa]'>Ateneo de Manila University</h1>
                <h1 className='italic'>Director's List Scholar</h1>
                <h1 className='italic'>DOST-SEI JLSS Merit Scholar</h1>
                <h1>August 2023 - June 2027</h1>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center gap-12'>
            <div className='flex flex-row items-center gap-8'>
              <MdWorkspacePremium  size={40} className='text-[#00f0ff]'/>
              <h1 className='text-4xl lg:text-5xl font-bold text-white'>Experience</h1>
            </div>
            <TimelineChart />
          </div>

          <div className='flex flex-col items-center gap-12'>

            <div className='flex flex-row items-center gap-8'>
              <FaCode  size={40} className='text-[#00f0ff]'/>
              <h1 className='text-4xl lg:text-5xl font-bold text-white'>Projects</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-20 items-stretch justify-center'>
              <div className="flex-1 border p-6 rounded-lg shadow-lg text-white text-center">
                <h1 className='font-bold mb-2 text-xl text-[#00FFFF]'>PPop Insights Dashboard</h1>
                
                <div className='flex flex-row m-4 items-center justify-center'>
                  <img className='h-5 lg:h-6' src="https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white" />
                  <img className='h-5 lg:h-6' src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
                  <img className='h-5 lg:h-6' src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
                </div>

                <h1 className='text-sm'>Developed an interactive Streamlit dashboard to visualize social media engagement and musical analytics for 15 PPop idol groups, initially built in Tableau and later migrated to Streamlit. Users can explore fan engagement patterns and musical characteristics through intuitive, interactive charts and filters.</h1>
                
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-8'>
                  <a
                    href="https://github.com/ellyyy-son/ppop-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='border border-amber-50 p-4 rounded-4xl w-4xs hover:bg-[#00FFFF]/50 text-md font-bold'> 
                      <div className='flex flex-row group group-hover:text-black justify-center items-center gap-4'>
                          <SiGithub size={24} className='text-[#00FFFF]'/>
                        Github &gt;
                      </div>
                    </button>
                  </a>
                  <a
                    href="https://ellyson.streamlit.app/Audio_Features"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='border border-amber-50 p-4 rounded-4xl w-4xs hover:bg-[#00FFFF]/50 text-md font-bold'> 
                      <div className='flex flex-row group group-hover:text-black justify-center items-center gap-4'>
                          <GrSend size={24} className='text-[#00FFFF]'/>
                        Visit &gt;
                      </div>
                    </button>
                  </a>
                </div>
              </div>

              <div className="flex-1 border p-6 rounded-lg shadow-lg text-white text-center">
                <h1 className='font-bold mb-2 text-xl text-[#00FFFF]'>Mapping News Coverage of Marcos’ First Six Months (2025)</h1>
                
                <div className='flex flex-row m-4 items-center justify-center'>
                  <img className='h-5 lg:h-6' src="https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white" />
                  <img className='h-5 lg:h-6' src="https://img.shields.io/badge/Scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
                </div>

                <h1 className='text-sm'>Collected and analyzed online articles covering Marcos’ first six months in office using LDA topic modeling and social network analysis to uncover dominant themes, key actors, and information flows. This project mapped monthly shifts in media framing and narrative focus, highlighting evolving topics and influential figures over time.</h1>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-8'>
                  <a
                    href="https://github.com/ellyyy-son/marcos-news-coverage"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className='border border-amber-50 p-4 rounded-4xl w-4xs hover:bg-[#00FFFF]/50 text-md font-bold'> 
                      <div className='flex flex-row group group-hover:text-black justify-center items-center gap-4'>
                          <SiGithub size={24} className='text-[#00FFFF]'/>
                        Github &gt;
                      </div>
                    </button>
                  </a>
                  <button onClick={() => window.open('/MappingPoliticalArticles.pdf', '_blank')} className='border border-amber-50 p-4 rounded-4xl w-4xs hover:bg-[#00FFFF]/50 text-md font-bold'>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <GrSend size={24} className='text-[#00FFFF]'/>
                      Visit &gt;
                    </div> 
                  </button>
                </div>
              </div>
            </div>

          </div>


        </div>
      

        <div className='flex flex-col lg:flex-row justify-between items-center mt-20'>
          <h1 className='font-bold text-xl text-white'>Elly Olegario</h1>
          <Socials />
        </div>
      </div>
    </div>
  );
}
