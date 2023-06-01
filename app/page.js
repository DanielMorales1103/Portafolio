"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {SiGmail} from "react-icons/si";
import {IoLogoWhatsapp} from "react-icons/io";
import Image from 'next/image';
import devdm from "../public/dev-dm-wave.png";
import web1 from "../public/web1.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import React, { useState } from 'react';

export default function Home() {
  const [darkmode, setDarkmode] = useState(true)

  return (
    <div className={darkmode ? 'dark' : ''}>    
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10  flex justify-between">
            <h1 className='text-xl font-burtons dark:text-gray-50'>developedbydm</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                onClick={() => setDarkmode(!darkmode)}
                className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a className=' flex gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="https://github.com/DanielMorales1103/Portafolio.git">
                  <AiFillGithub className='text-2xl'/> GitHub</a>
                </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Daniel Morales</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-500'>Desarrollador</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100'> 
              Estudiante de tercer año de la carrera <span className='italic'>Ciencias de la Computación y Tecnologías de la Información</span>
              en la Universidad del Valle de Guatemala.
            </p>
            <p>

            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80  overflow-hidden'>
            <Image  src={devdm} />
          </div>
        </section>
        
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 md:text-3xl mt-8 dark:text-gray-500'>Conocimientos</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-100'> 
              Me gusta el mundo del Frontend. Me gusta diseñar interfaces de usuario atractivas y funcionales.
              Durante mi aprendizaje he adquirido conocimientos en tecnologías y herramientas cómo 
              <span className='text-teal-500'> HTML</span>, 
              <span className='text-teal-500'> CSS</span>,
              <span className='text-teal-500'> JavaScript</span>,
              <span className='text-teal-500'> React</span> y 
              <span className='text-teal-500'> KaboomJS</span>. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-100'>
              Además de mi enfoque en el frontend, también tengo conocimiento en el backend.
              Tengo conocimiento en lenguajes como 
              <span className='text-teal-500'> Python</span>, 
              <span className='text-teal-500'> Java</span> y
              <span className='text-teal-500'> C#</span>.
              También estoy familiarizado con bases de datos como <span className='text-teal-500'> PostgreSQL</span>.
            </p>
          </div>
         
        </section>
        <section>
          <div className='text-center'>
          <h3 className='text-3xl py-1 md:text-3xl mt-12 dark:text-gray-500'>Portafolio </h3>
          <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-100'> 
            Durante mi aprendizaje he realizado distintos proyecto como la 
            <span className='text-teal-500'> replicación de una imagen </span> solo con CSS, una
            <span className='text-teal-500'> memoria </span>, una
            <span className='text-teal-500'> calculadora </span> y una
            <span className='text-teal-500'> replica de la página de Bootstrap </span> utilizando React y 
            finalmente un <span className='text-teal-500'> juego de batallas pokemon </span> con KaboomJS.            
          </p>
          </div>
          {/* Proyectos */}
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 text-center shadow-lg rounded-xl p-1 pb-3 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web1} className='rounded-lg mb-8' width={'100%'} height={'100%'}/>
              <a className='text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='http://107.21.144.181:3180/' >Ver más</a>
            </div>
            <div className='basis-1/3 flex-1 text-center shadow-lg rounded-xl p-1 pb-3 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web3} className='rounded-lg mb-8' width={'100%'} height={'100%'}/>
              <a className='text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='https://memoria-774c0.web.app/'>Ver más</a>
            </div>
            <div className='basis-1/3 flex-1 text-center shadow-lg rounded-xl p-1 pb-3 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web4} className='rounded-lg mb-8'  width={'100%'} height={'100%'}/>
              <a className='text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='https://calculadora-b5c89.web.app/'>Ver más</a>
            </div>
            <div className='basis-1/3 flex-1 text-center shadow-lg rounded-xl p-1 pb-3 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web5} className='rounded-lg mb-8' width={'100%'} height={'100%'}/>
              <a className='text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='https://bootstrap-fa53a.web.app/'>Ver más</a>
            </div>
            <div className='basis-1/3 flex-1 text-center shadow-lg rounded-xl p-1 pb-3 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web6} className='rounded-lg mb-8' width={'100%'} height={'100%'}/>
              <a className='text-xl cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' 
              href='https://pokemonbattlegame-c7b24.web.app/'>Ver más</a>
            </div>
          </div>
        </section>
        <section>
        <h3 className='text-3xl py-1 md:text-3xl mt-12 dark:text-gray-500' >Contacto </h3>
        <ul className='dark:text-gray-100'>
          <li className=' flex mt-4 gap-5'>
            <AiFillLinkedin className='text-blue-600 text-3xl'/> <a className='text-lg' href='https://www.linkedin.com/in/danielmoralesu/'> Linkedin</a>
          </li>
          <li className='flex mt-2 gap-5'>
            <SiGmail className='text-red-600 text-3xl'/> <p className='text-lg'> demoralesu@morurgt.com</p>
          </li>
          <li className=' flex mt-2 gap-5'>
            <IoLogoWhatsapp className='text-green-500 text-3xl'/> <p className='text-lg'> 4959-4868</p>
          </li>
        </ul>          
        </section>
      </main>
    </div>
  )
}
