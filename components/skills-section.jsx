import React from 'react'

const skills = [
  { image: '/images/php.png', label: 'PHP' },
  { image: '/images/laravel.png', label: 'laravel' },
  { image: '/images/react.png', label: 'react' },
  { image: '/images/html.png', label: 'HTML' },
  { image: '/images/css.png', label: 'CSS' },
  { image: '/images/js.png', label: 'javaScript' },
  { image: '/images/bootstrap.png', label: 'bootstrap' },
  { image: '/images/material.png', label: 'material ui' },
  { image: '/images/jquery.png', label: 'JQuery' },
  { image: '/images/git.png', label: 'github' },
  { image: '/images/tailwind.png', label: 'tailwind' },
  { image: '/images/sass.png', label: 'sass' },
]

export default function SkillsSection() {
  return (
    <section className='w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] mb-6' id='skills'>
      <div className='md:h-[60vh] flex justify-center items-center px-3 mb-3'>
        <div className='max-w-[60rem] mx-auto'>
          <div className='flex justify-center flex-wrap gap-2 grayscale'>
            {skills.map((skill, i) => (
              <div key={i} className='flex items-center gap-3 shadow-lg w-30 md:w-1/6 p-3 rounded-md'>
                <div className=''>
                  <img src={skill.image} alt={skill.label} className='w-3 md:w-8' />
                </div>
                <div className='flex-1'>
                  <p className='text-center text-xs md:text-sm capitalize'>{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
