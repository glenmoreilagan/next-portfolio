import React from 'react'

import { CgGym, CgCode, CgRead, CgLink, CgProfile } from 'react-icons/cg'
import { FaGithub, FaLink } from 'react-icons/fa'
import SectionLayout from './layouts/SectionLayout'

export default function ProjectSection() {
  return (
    <SectionLayout id='projects'>
      <div>
        <h1 className='font-bold text-4xl text-[#191919] pt-12 pb-12'>Projects</h1>
      </div>
      <div className='flex justify-center items-center'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='flex gap-3 border border-gray-100 rounded-md p-6 w-full'>
              <div className='flex-1 relative'>
                <div className='flex gap-3 mb-5 items-center'>
                  <div className='flex-1'>
                    <p className='text-xl capitalize tracking-widest font-bold'>KAPE-SHOP</p>
                    <span className='text-xs text-gray-500'>Inventory with Point of Sale - 2024</span>
                  </div>
                  <div className='flex gap-3'>
                    <a href='https://github.com/glenmoreilagan/kape-shop2' target='_blank' title='View repository'>
                      <FaGithub size={'1em'} color='#303030' />
                    </a>
                    <a href='https://kape-shop.vercel.app' target='_blank' title='View site'>
                      <FaLink size={'1em'} color='#303030' />
                    </a>
                  </div>
                </div>
                <div>
                  <p className='text-sm mb-20 text-gray-600 line-clamp-3 md:line-clamp-6'>
                    Kape-shop, used for Inventory with Point of Sale, is an innovative and user-friendly system designed
                    to revolutionize the way businesses handle both inventory management and point-of-sale transactions,
                    businesses can effortlessly monitor their stock levels, track product movement, and manage sales in
                    real-time. The system's intuitive interface simplifies the process of conducting transactions,
                    generating invoices, and keeping a close eye on product availability.
                  </p>
                </div>
                <div className='flex items-center gap-3 absolute bottom-0'>
                  <img src='/images/html.png' alt='html' width={26} />
                  <img src='/images/css.png' alt='css' width={26} />
                  <img src='/images/tailwind.png' alt='tailwind' width={26} />
                  <img src='/images/js.png' alt='js' width={26} />
                  <img src='/images/laravel.png' alt='laravel' width={26} />
                  <img src='/images/mysql.png' alt='mysql' width={26} />
                </div>
              </div>
            </div>
            <div className='flex gap-3 border border-gray-100 rounded-md p-6 w-full'>
              <div className='flex-1 relative'>
                <div className='flex gap-3 mb-5 items-center'>
                  <div className='flex-1'>
                    <p className='text-xl capitalize tracking-widest font-bold'>LMS</p>
                    <span className='text-xs text-gray-500'>Leave Management System - 2021</span>
                  </div>
                  <div className='flex gap-3'>
                    <a
                      href='https://github.com/glenmoreilagan/leave-management-system'
                      title='View Repository'
                      target='_blank'
                    >
                      <FaGithub size={'1em'} color='#303030' />
                    </a>
                  </div>
                </div>
                <div>
                  <p className='text-sm  mb-20 text-gray-600 line-clamp-3 md:line-clamp-6'>
                    The Leave Management System (LMS) is a tailored solution designed to simplify and automate the
                    process of managing employee leave for small businesses. LMS offers a user-friendly platform that
                    caters specifically to the unique needs of small enterprises, helping them effectively track and
                    manage employee time off while ensuring smooth operations.
                  </p>
                </div>
                <div className='flex items-center gap-3 absolute bottom-0'>
                  <img src='/images/html.png' alt='html' width={26} />
                  <img src='/images/css.png' alt='css' width={26} />
                  <img src='/images/tailwind.png' alt='tailwind' width={26} />
                  <img src='/images/react.png' alt='react' width={26} />
                  <img src='/images/laravel.png' alt='laravel' width={26} />
                  <img src='/images/mysql.png' alt='mysql' width={26} />
                </div>
              </div>
            </div>
            <div className='flex gap-3 border border-gray-100 rounded-md p-6 w-full'>
              <div className='flex-1 relative'>
                <div className='flex gap-3 mb-5 items-center'>
                  <div className='flex-1'>
                    <p className='text-xl capitalize tracking-widest font-bold'>CAS</p>
                    <span className='text-xs text-gray-500'>Clinic Appointment System - 2021</span>
                  </div>
                  <div className='flex gap-3'>
                    <a
                      href='https://github.com/glenmoreilagan/clinic-appointment-system'
                      title='View Repository'
                      target='_blank'
                    >
                      <FaGithub size={'1em'} color='#303030' />
                    </a>
                  </div>
                </div>
                <div>
                  <p className='text-sm  mb-20 text-gray-600 line-clamp-3 md:line-clamp-6'>
                    The Clinic Appointment System (CAS) is a specialized and tailored solution designed to streamline
                    and enhance the process of managing appointments for pregnant individuals. CAS offers a seamless and
                    user-friendly platform that caters specifically to the unique needs of clinics and expecting
                    mothers. With CAS, clinics can efficiently schedule and organize prenatal appointments, ensuring
                    optimal care and timely medical attention for pregnant individuals.
                  </p>
                </div>
                <div className='flex items-center gap-3 absolute bottom-0'>
                  <img src='/images/html.png' alt='html' width={26} />
                  <img src='/images/css.png' alt='css' width={26} />
                  <img src='/images/bootstrap.png' alt='bootstrap' width={26} />
                  <img src='/images/jquery.png' alt='jquery' width={26} />
                  <img src='/images/php.png' alt='php' width={26} />
                  <img src='/images/mysql.png' alt='mysql' width={26} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
