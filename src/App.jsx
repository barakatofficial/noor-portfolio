import { useState } from 'react'
import './App.css';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import noor from "./assets/noor.png"
import redr from "./assets/redr.png"
import dtglobal from "./assets/dtglobal.jpg"
import unlogo from "./assets/unlogo.jpg"



function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

    <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-30">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">Noor Kuchai</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Noorullah Kuchai
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Humanitarian Engineer - Project Manager - Researcher.
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xxl mx-auto md:text-xl">
          My personal experiences have given me a unique perspective and a deep empathy for those in need. I am dedicated to leveraging my knowledge and skills to empower communities and promote sustainable development. I strive to create positive change and improve the lives of vulnerable populations.
          </p>
          <div className="text-5xl flex justify-center gap-16 pt-3 text-gray-600 dark:text-gray-400">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-16 md:h-96 md:w-96">
          <img src={noor} layout="fill" objectFit="cover" />
          </div>
        </div>
      </section>
      <section className="py-10">
      <div>
            <h3 className="text-3xl py-1 dark:text-white ">Experiance</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Since the beginning of my journey as a 
              <span className="text-teal-500"> humanitarian engineer</span>
              , project manager, and researcher, I have had the privilege of working in various challenging environments and collaborating with talented individuals to make a positive impact.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              From my experiences with UNHCR to leading the implementation of diverse projects in many firms..
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* The First Card */}
            <div className="p-5 bg-gradient-to-b from-teal-500 text- to-cyan-700 rounded-lg max-w-lg">

            <div className="flex">
              <img src={redr} className='h-20 rounded-lg' />
              <div className="">
                <h1 className='text-xl dark:text-white md:text-xl  mx-5'>Senior Technical Programmes Coordinator</h1>
                <h2 className='text-sm dark:text-white md:text-xl  mx-5'>REDR UK • Jan 2023 - Present</h2>
              </div>
            </div>
             
            <div className='mt-4 '>
              <h2 className='text-md dark:text-white mb-1'>• Rebuilding lives in times of disaster by training, supporting, and providing aid workers to relief programmes across the world.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Supporting the provision of innovative, high-quality training courses aiming to provide participants with the knowledge and skills to manage disasters more effectively.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Business development</h2>
            </div>
            </div>

            {/* The Second Card */}
            <div className="p-5 bg-gradient-to-b from-teal-500 text- to-cyan-700 rounded-lg max-w-lg">

            <div className="flex">
              <img src={dtglobal} className='h-20 rounded-lg' />
              <div className="">
                <h1 className='text-xl dark:text-white md:text-xl  mx-5'>Senior Consultant - Infrastructure</h1>
                <h2 className='text-sm dark:text-white md:text-xl  mx-5'>DT Global • Oct 2021 - Dec 2022</h2>
              </div>
            </div>
             
            <div className='mt-4 '>
              <h2 className='text-md dark:text-white mb-1'>• Working collaboratively with engineers, planners and policymakers in cross-disciplinary and multi-functional teams.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Business Development, supporting business stream Strategies & technical input.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Manage projects and support project tasks.</h2>
            </div>
            </div>

            {/* The Third Card */}
            <div className="p-5 bg-gradient-to-b from-teal-500 text- to-cyan-700 rounded-lg max-w-lg">

            <div className="flex">
              <img src={unlogo} className='h-20 rounded-lg' />
              <div className="">
                <h1 className='text-xl dark:text-white md:text-xl  mx-5'>Programme Associate</h1>
                <h2 className='text-sm dark:text-white md:text-xl  mx-5'>UNHCR • Jan 2013 - Dec 2015</h2>
              </div>
            </div>
             
            <div className='mt-4 '>
              <h2 className='text-md dark:text-white mb-1'>• Assist in negotiating agreements with implementing partners and ensure that IP agreements are established in conformity with UNHCR’s financial rules and the latest Headquarters’ instructions.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Assists in the planning, implementation, monitoring and reporting of protection and assistance programming for refugees and internally displaced persons.</h2>
              <h2 className='text-md dark:text-white mb-1'>• Undertake proper collection, monitoring and use of baselines, standards and indicators needed to measure and analyze program performance, trends and target interventions.</h2>
            </div>
            </div>

          </div>
      </section>
    </main>
  </div>
  )
}

export default App
