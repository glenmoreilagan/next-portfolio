import React from 'react'

const skills = [
  { image: '/images/laravel.png', label: 'laravel' },
  { image: '/images/php.png', label: 'PHP' },
  { image: '/images/react.png', label: 'react' },
  { image: '/images/js.png', label: 'javaScript' },
  { image: '/images/mysql.png', label: 'MySQL' },
  { image: '/images/html.png', label: 'HTML' },
  { image: '/images/css.png', label: 'CSS' },
  { image: '/images/tailwind.png', label: 'tailwind' },
  { image: '/images/bootstrap.png', label: 'bootstrap' },
  { image: '/images/material.png', label: 'material ui' },
  { image: '/images/jquery.png', label: 'JQuery' },
  { image: '/images/github.png', label: 'github' },
  { image: '/images/sass.png', label: 'sass' },
  { image: '/images/digitalocean.png', label: 'digitalOcean' },
  { image: '/images/cpanel.png', label: 'cPanel' },
  { image: '/images/zustand.png', label: 'Zustand' },
]

export default function SkillsSection() {
  return (
    <section id='skills' className='bg-[#F7F9FC]'>
      <div className='w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] pb-12'>
        <div>
          <h1 className='font-bold text-4xl text-[#191919] pt-12 pb-12'>Skills</h1>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-6'>
          {skills.map((skill, i) => (
            <div
              key={i}
              className='flex items-center flex-col gap-3 w-full p-3 rounded-md bg-white'
              style={{ boxShadow: '0 4px 10px 0 rgba(189, 208, 223, .25)' }}
            >
              <div className=' py-3'>
                <img src={skill.image} alt={skill.label} className='w-8 md:w-10' />
              </div>
              <div className='flex-1'>
                <p className='text-center text-xs md:text-sm capitalize px-3'>{skill.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
