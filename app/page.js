"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {SiGmail} from "react-icons/si";
import {IoLogoWhatsapp} from "react-icons/io";
import Image from 'next/image';
import devdm from "../public/dev-dm-wave.png";
import web5 from "../public/web5.png";
import React, { useState } from 'react';

export default function Home() {
  const [darkmode, setDarkmode] = useState(true)

  return (
    <div className={darkmode ? 'dark' : ''}>    
      <main className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-6 flex justify-between items-center">
            <h1 className='text-lg sm:text-xl font-burtons dark:text-gray-50'>developedbydm</h1>
            <ul className='flex items-center gap-4'>
              <li>
                <BsFillMoonStarsFill
                onClick={() => setDarkmode(!darkmode)}
                className='cursor-pointer text-xl sm:text-2xl dark:text-white'/>
              </li>
              <li>
                <a className='flex gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' href="https://github.com/DanielMorales1103/Portafolio.git">
                  <AiFillGithub className='text-xl sm:text-2xl'/> GitHub</a>
              </li>
            </ul>
          </nav>
          <div className='text-center mt-12'>
            <h2 className='text-4xl sm:text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Daniel Morales</h2>
            <h3 className='text-lg sm:text-2xl py-2 md:text-3xl dark:text-gray-500'>Desarrollador</h3>
            <p className='text-sm sm:text-md py-5 leading-6 sm:leading-8 text-gray-800 md:text-xl mx-auto dark:text-gray-100 mb-6'> 
              Soy estudiante de quinto año de <span className='italic'>Ciencias de la Computación y Tecnologías de la Información</span> con
              interés en el desarrollo web, Inteligencia Artificial, Bases de Datos y Desarrollo de Software. Me
              apasionan los retos y disfruto trabajar en equipo, donde puedo aportar mis ideas y aprender de los
              demás. Soy responsable y me comprometo a aprender continuamente sobre las tecnologías y
              tendencias que me apasionan, buscando siempre mejorar mis habilidades y contribuir de manera
              significativa a los proyectos en los que participo.
            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 sm:w-72 md:w-80 overflow-hidden'>
            <Image  src={devdm} />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Sección de Educación */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">EDUCACIÓN</h3>
            <p className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>2021 - Actualidad:</strong> Universidad del Valle de Guatemala - Ingeniería en Ciencias de la Computación y Tecnologías de la Información
            </p>
            <p className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>2007 - 2020:</strong> Colegio Suizo Americano - Bachiller en Ciencias y Letras con orientación en Computación
            </p>
          </div>

          {/* Sección de Habilidades */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">HABILIDADES</h3>
            <ul className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 list-disc list-inside text-left">
              <li><strong>Lenguajes de Programación:</strong> Python, Java, JavaScript, PHP</li>
              <li><strong>Desarrollo Web:</strong> HTML, CSS, Tailwind CSS, Bootstrap, React, Next.js</li>
              <li><strong>Frameworks y Plataformas:</strong> Spring Boot, Django</li>
              <li><strong>Bases de Datos:</strong> MySQL, MongoDB</li>
              <li><strong>Herramientas y Control de Versiones:</strong> Docker, Git</li>
              <li><strong>Idiomas:</strong> Español (Nativo), Inglés (B2)</li>
            </ul>
          </div>
        </section>


        <section className="mt-12">
          <div className="md:w-3/4 mx-auto">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">EXPERIENCIA LABORAL</h3>
            <div className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>Junior Developer</strong> <br />
              <em>Spring-bus, Mar 2024 - Presente</em>
              <ul className="list-disc list-inside">
                <li>Desarrollé la aplicación web para la venta de boletos utilizando Next.js y Tailwind CSS en el front-end y Java con Spring Boot en el back-end.</li>
                <li>Colaboré en la implementación de servicios y endpoints para la integración de datos en la plataforma.</li>
                <li>Trabajé en el portal de backoffice para proveedores, usando Python, HTML, Bootstrap y Django.</li>
                <li>Implementé consultas y lógica de acceso a datos en MySQL desde el backend.</li>
              </ul>
            </div>
            <div className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left mt-6">
              <strong>Junior Developer Intern</strong> <br />
              <em>Pacifiko.com, Jun 2023 - Feb 2024</em>
              <ul className="list-disc list-inside">
                <li>Mejoré la página web de la tienda y el sistema interno utilizando PHP, JavaScript, HTML y CSS.</li>
                <li>Automaticé tareas operativas con scripts en Python, reduciendo significativamente el tiempo de trabajo.</li>
                <li>Realicé consultas y tareas de administración en la base de datos MySQL.</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <div className='text-center'>
          <h3 className='text-2xl sm:text-3xl py-1 md:py-4 mt-8 dark:text-gray-500'>Proyectos</h3>
          <p className='text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl max-w-3xl mx-auto dark:text-gray-100'> 
            Durante mi aprendizaje he realizado distintos proyectos            
          </p>
          </div>
          {/* Proyectos */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>            
            <div className='flex flex-col items-center shadow-lg rounded-xl p-4 dark:bg-slate-700 dark:shadow-black'>
              <Image src={web5} className='rounded-lg mb-4' width={'100%'} height={'100%'}/>
              <a className='text-base sm:text-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' 
              href='https://bootstrap-fa53a.web.app/'>Ver más</a>
            </div>
          </div>
        </section>
        <section>
        <h3 className='text-2xl sm:text-3xl py-1 md:py-4 mt-8 dark:text-gray-500' >Contacto</h3>
        <ul className='dark:text-gray-100'>
          <li className='flex mt-4 gap-4 sm:gap-6'>
            <AiFillLinkedin className='text-blue-600 text-2xl sm:text-3xl'/> <a className='text-sm sm:text-lg' href='https://www.linkedin.com/in/danielmoralesu/'> Linkedin</a>
          </li>
          <li className='flex mt-2 gap-4 sm:gap-6'>
            <SiGmail className='text-red-600 text-2xl sm:text-3xl'/> <p className='text-sm sm:text-lg'> demoralesu@morurgt.com</p>
          </li>
          <li className='flex mt-2 gap-4 sm:gap-6'>
            <IoLogoWhatsapp className='text-green-500 text-2xl sm:text-3xl'/> <p className='text-sm sm:text-lg'> 4959-4868</p>
          </li>
        </ul>          
        </section>
      </main>
    </div>
  )
}
