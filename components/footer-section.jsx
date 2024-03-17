import React from 'react'

export default function FooterSection() {
  return (
    <footer className='h-[30vh] bg-[#303030] text-white text-xs'>
      <div className='grid grid-cols-4 px-10 h-full'>
        <div className='flex items-center h-full'>
          <div className='leading-7'>
            <p>Quick Links</p>
            <ul className=' list-disc list-inside'>
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
        </div>
        <div className='flex items-center h-full'>
          <div className='leading-7'>
            <p>Social Links</p>
            <ul className=' list-disc list-inside'>
              <li>
                <a href='#home'>Email</a>
              </li>
              <li>
                <a href='#skills'>LinkedIn</a>
              </li>
              <li>
                <a href='#projects'>Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
