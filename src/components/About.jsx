import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
        <SectionTitle>About me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
         Hello! I'm Tony Cross, a passionate and dedicated Junior Web Developer with a strong foundation in creating dynamic and responsive websites. I specialize in front-end development with expertise in HTML, CSS, JavaScript, React, Vue, PHP, Laravel, github, Docker,Flutter and have hands-on experience with popular frameworks like React and Angular. My journey in web development began with a curiosity for how websites work and evolved into a career driven by a love for coding and problem-solving.
        </p>
        <a href='mailto:tonycross440@gmail.com'
        className='block mt-3 text-md md:text-lg  text-gray-600 dark:text-zinc-950 underline hover:text-green-500 dark:hover:text-green-500'>tonycross440@gmail.com</a>
      </div>
     <img src={'https://avatars.githubusercontent.com/u/103016621?v=4'} alt='Tony Cross' className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About
