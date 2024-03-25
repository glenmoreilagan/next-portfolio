import React from 'react'
import { FaRegEnvelope, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok, FaFacebook } from 'react-icons/fa'

export default function ContactSection() {
  return (
    <section id='contact' className='w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] mb-6'>
      <div>
        <h1 className='font-bold text-4xl text-[#191919] pt-12 pb-12'>Contact</h1>
      </div>
      <div className='grid grid-cols-3 place-items-start gap-x-6 gap-y-12'>
        <div className='flex gap-3 items-center'>
          <div>
            <FaRegEnvelope size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>Send me an email:</p>
            <a href='mailto:ilaganglenmore019@gmail.com' className='text-sm font-medium'>
              /ilaganglenmore019@gmail.com
            </a>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div>
            <FaLinkedinIn size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>My LinkedIn account:</p>
            <a href='https://www.linkedin.com/in/glenmoreilagan' className='text-sm font-medium'>
              /glenmoreilagan
            </a>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div>
            <FaInstagram size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>My Instagram account:</p>
            <a href='https://www.instagram.com/glenmarami' className='text-sm font-medium'>
              /glenmarami
            </a>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div>
            <FaGithub size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>My Github account:</p>
            <a href='https://github.com/glenmoreilagan' className='text-sm font-medium'>
              /glenmoreilagan
            </a>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div>
            <FaTiktok size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>My Tiktok account:</p>
            <a href='https://www.tiktok.com/@glenmarami' className='text-sm font-medium'>
              /glenmarami
            </a>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div>
            <FaFacebook size={40} className=' text-[#191919]' />
          </div>
          <div>
            <p className='text-xs text-gray-600'>My Facebook account:</p>
            <a href='https://www.facebook.com/glenmarami' className='text-sm font-medium'>
              /glenmarami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
