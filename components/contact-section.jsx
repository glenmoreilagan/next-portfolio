import React from 'react'
import { FaRegEnvelope, FaLinkedinIn, FaInstagram, FaGithub, FaTiktok, FaFacebook } from 'react-icons/fa'

const socialMedia = [
  {
    icon: <FaGithub size={40} className=' text-[#191919]' />,
    label: 'My Github account:',
    url: (
      <a href='https://github.com/glenmoreilagan' target='_blank' className='text-[11px] md:text-sm font-medium'>
        /glenmoreilagan
      </a>
    ),
  },
  {
    icon: <FaLinkedinIn size={40} className=' text-[#191919]' />,
    label: 'My LinkedIn account:',
    url: (
      <a
        href='https://www.linkedin.com/in/glenmoreilagan'
        target='_blank'
        className='text-[11px] md:text-sm font-medium'
      >
        /glenmoreilagan
      </a>
    ),
  },
  {
    icon: <FaRegEnvelope size={40} className=' text-[#191919]' />,
    label: 'Send me an email:',
    url: (
      <a href='mailto:ilaganglenmore019@gmail.com' className='text-[11px] md:text-sm font-medium'>
        /ilaganglenmore019@gmail.com
      </a>
    ),
  },
  {
    icon: <FaInstagram size={40} className=' text-[#191919]' />,
    label: 'My Instagram account:',
    url: (
      <a href='https://www.instagram.com/glenmarami' target='_blank' className='text-[11px] md:text-sm font-medium'>
        /glenmarami
      </a>
    ),
  },
  {
    icon: <FaTiktok size={40} className=' text-[#191919]' />,
    label: 'My Tiktok account:',
    url: (
      <a href='https://www.tiktok.com/@glenmarami' target='_blank' className='text-[11px] md:text-sm font-medium'>
        /glenmarami
      </a>
    ),
  },
  {
    icon: <FaFacebook size={40} className=' text-[#191919]' />,
    label: 'My Facebook account:',
    url: (
      <a href='https://www.facebook.com/glenmarami' target='_blank' className='text-[11px] md:text-sm font-medium'>
        /glenmarami
      </a>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id='contact' className='bg-[#F7F9FC]'>
      <div className='w-[calc(100vw-3rem)] mx-auto sm:w-[93vw] md:w-[90vw] lg:w-[900px] pb-12'>
        <div>
          <h1 className='font-bold text-4xl text-[#191919] pt-12 pb-12'>Contact</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 place-items-start gap-x-12  md:gap-x-6 gap-y-12'>
          {socialMedia.map((item) => (
            <div key={item.label} className='flex gap-3 items-center'>
              <div>{item.icon}</div>
              <div>
                <p className='text-xs text-gray-600'>{item.label}</p>
                <div className='text-blue-600'>{item.url}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
