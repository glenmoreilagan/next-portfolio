import React from 'react'

export default function FooterSection() {
  return (
    <footer className='h-[20vh] md:h-[10vh] bg-[#303030] text-white text-xs'>
      <div className='flex justify-center md:justify-between flex-col md:flex-row items-center gap-6 md:gap-1 h-full w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px]'>
        <div>
          <ul className='font-thin list-disc list-inside flex gap-6'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-center md:text-right font-thin'>
            My portfolio designed was inspired by{' '}
            <a href='https://dnachavez.ph' target='_blank' className='font-medium underline'>
              dnachavez
            </a>
          </p>
          <p className='text-center md:text-right font-thin'>Developed by Glenmore @{2024}</p>
        </div>
      </div>
    </footer>
  )
}
