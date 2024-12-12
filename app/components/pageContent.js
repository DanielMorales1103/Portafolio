"use client";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import {SiGmail} from "react-icons/si";
import {IoLogoWhatsapp} from "react-icons/io";
import Image from 'next/image';
import devdm from "../../public/dev-dm-wave.png";
import web5 from "../../public/web5.png";
import React, { useState } from 'react';
import { useTranslations } from "next-intl";
import LanguageSwitcher from './LanguageSwitcher';

export default function PageContent() {
  const [darkmode, setDarkmode] = useState(true)
  const t = useTranslations();
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
              <li>
                {/* Selector de Idiomas */}
                <LanguageSwitcher />
              </li>
            </ul>
          </nav>
          <div className='text-center mt-12'>
            <h2 className='text-4xl sm:text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Daniel Morales</h2>
            <h3 className='text-lg sm:text-2xl py-2 md:text-3xl dark:text-gray-500'>{t("developer")}</h3>
            <p className='text-sm sm:text-md py-5 leading-6 sm:leading-8 text-gray-800 md:text-xl mx-auto dark:text-gray-100 mb-6'> 
                {t("description")}
            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 sm:w-72 md:w-80 overflow-hidden'>
            <Image  src={devdm} alt="Imagen del desarrollador"/>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 mt-8">
          {/* Sección de Educación */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">{t("edu")}</h3>
            <p className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>2021 - {t("present")}:</strong> Universidad del Valle de Guatemala - {t("carrera")}
            </p>
            <p className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>2007 - 2020:</strong> Colegio Suizo Americano - {t("colegio")}
            </p>
          </div>

          {/* Sección de Habilidades */}
          <div className="md:w-1/2">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">{t("skill")}</h3>
            <ul className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 list-disc list-inside text-left">
              <li><strong>{t("lenguajesP")}</strong> Python, Java, JavaScript, PHP</li>
              <li><strong>{t("web")}</strong> HTML, CSS, Tailwind CSS, Bootstrap, React, Next.js</li>
              <li><strong>{t("frameworks")}</strong> Spring Boot, Django</li>
              <li><strong>{t("db")}</strong> MySQL, MongoDB</li>
              <li><strong>{t("tools")}</strong> Docker, Git</li>
              <li><strong>{t("languages")}</strong>{t("len")}</li>
            </ul>
          </div>
        </section>


        <section className="mt-12">
          <div className="md:w-3/4 mx-auto">
            <h3 className="text-2xl sm:text-3xl py-1 md:py-4 dark:text-gray-500 text-center">{t("experiencia")}</h3>
            <div className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left">
              <strong>Junior Developer</strong> <br />
              <em>Spring-bus, Mar 2024 - {t("present")}</em>
              <ul className="list-disc list-inside">
                <li>{t("springBus.1")}</li>
                <li>{t("springBus.2")}</li>
                <li>{t("springBus.3")}</li>
                <li>{t("springBus.4")}</li>
              </ul>
            </div>
            <div className="text-sm sm:text-md py-2 leading-6 sm:leading-8 text-gray-800 md:text-xl dark:text-gray-100 text-left mt-6">
              <strong>Junior Developer Intern</strong> <br />
              <em>Pacifiko.com, Jun 2023 - Feb 2024</em>
              <ul className="list-disc list-inside">
                <li>{t("pacifiko.1")}</li>
                <li>{t("pacifiko.2")}</li>
                <li>{t("pacifiko.3")}</li>
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
              <Image src={web5}  alt="Imagen del proyecto" className='rounded-lg mb-4' width={'100%'} height={'100%'}/>
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
