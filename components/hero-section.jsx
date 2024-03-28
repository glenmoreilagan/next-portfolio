import React from 'react'
import { BiFile, BiMessageAltDetail } from 'react-icons/bi'

export default function HeroSection() {
  return (
    <section
      id='home'
      className='h-screen w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] flex flex-col justify-center pb-12'
    >
      <div className='max-w-7xl px-5 md:px-10 mx-auto'>
        <div className='text-2xl sm:text-4xl md:text-6xl text-center mb-8'>
          <span className='text-sm bg-[#191919] rounded-full px-3 py-1 text-white h-24'>Hi 👋,</span>
          <p className='w-full'>
            <span className='text-[#191919]'>Experienced</span>{' '}
            <span className='font-bold text-blue-500'>fullstack</span>
          </p>
          <p className='w-full'>
            <span className='font-bold text-blue-500'>developer</span>{' '}
            <span className='text-[#191919]'>with a focus on</span>
          </p>
          <p className='w-full'>
            <span className='font-bold text-blue-500'>backend development</span>
          </p>
        </div>

        <div className='flex justify-center mb-8'>
          <div className='grid grid-cols-2 gap-3 md:gap-0 md:grid-cols-3'>
            <div className='w-full md:w-48 px-3'>
              <div className='grid grid-cols-2 place-items-center'>
                <div>
                  <p className='font-bold text-gray-700'>+3.5</p>
                </div>
                <div>
                  <p className='text-xs  text-gray-500'>Years of experience</p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-48 md:border-l-2 md:border-r-2 px-3'>
              <div className='grid grid-cols-2 place-items-center'>
                <div>
                  <p className='font-bold text-gray-700'>+50K</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Lines of codes written</p>
                </div>
              </div>
            </div>
            <div className='w-full md:w-48 px-3'>
              <div className='grid grid-cols-2 place-items-center'>
                <div>
                  <p className='font-bold text-gray-700'>+2K</p>
                </div>
                <div>
                  <p className='text-xs text-gray-500'>Total github commits</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-3'>
          <a href='/Glenmore Ilagan.pdf' target='_blank'>
            <button className='bg-blue-500 hover:bg-blue-600 w-32 px-3 py-2 rounded-full font-medium text-xs flex items-center justify-center gap-3 text-white'>
              <BiFile size={16} />
              Resume
            </button>
          </a>
          <a href='#contact'>
            <button className='bg-gray-100 hover:bg-gray-200 w-32 px-3 py-2 rounded-full font-medium text-xs flex items-center justify-center gap-3'>
              <BiMessageAltDetail size={16} />
              Contact
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
