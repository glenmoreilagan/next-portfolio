import React from 'react'
import { Chrono } from 'react-chrono'
import SectionLayout from './layouts/SectionLayout'

const ExperienceSection = () => {
  const items = [
    {
      title: <img src='/images/company-logo/llibi.jpg' alt='llibi' width={72} />,
      timelineContent: (
        <div>
          <div className='mb-6'>
            <h1 className='font-bold text-lg text-[#191919]'>Lacson & Lacson Insurance Brokers, Inc.</h1>
            <h4 className='text-gray-700'>Junior Web Developer</h4>
            <h4 className='text-gray-500 text-xs'>August 2022 - Present</h4>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Ateneo De Manila Accidental Claims</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Developed a student portal for their forms to send to admin portal.</li>
              <li>Admin side can upload policies and verify the uploaded files of the student if claimable or not.</li>
              <li>Auto Email Notification and SMS Notification</li>
              <li>API integration using ZOHO Sign the digital e-signature.</li>
              <li>Tech used: NextJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Email Blasters</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Developed that they can use to send an email with few steps, </li>
              <li>Create a template of an email they want to send.</li>
              <li>Tech used: ReactJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Lacson Appointment Meeting</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>
                Developed this system for appointments when a meeting is created the employees can select schedule.
              </li>
              <li>Sending Email Notification </li>
              <li>Issuing Certificate</li>
              <li>Tech used: NextJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>E-Portal for Deel, Preqin and Dialpad</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>
                Maintaining and develops new features of this portal for our clients to enroll their dependents this is
                partner with philcare and maxicare for HMO certificates.
              </li>
              <li>Tech used: ReactJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Pre-Approved LOA</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Developed this system for public user and admin side. </li>
              <li>Clients can request a quotation of insurance. </li>
              <li>Admin has a dashboard and lists of the requestors/clients.</li>
              <li>Tech used: NextJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Careers Page</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Develop landing page for careers for our websites</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Tree Planting</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Develop website for ESG program for tree planting</li>
              <li>Tech used: NextJS for frontend</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Pre-Approved LOA</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Developed this system for public user and admin side. </li>
              <li>Clients can request a quotation of insurance. </li>
              <li>Admin has a dashboard and lists of the requestors/clients.</li>
              <li>Tech used: NextJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Car Insurance</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>
                Developed for our every client computing and summarizing the insured utilization and laboratory it
                lessens the TAT of department who handles these issuing LOA.
              </li>
              <li>Tech used: NextJS for frontend, Laravel for backend and MySql for database.</li>
            </ul>
          </div>
          <div className='mb-3'>
            <h1 className='font-medium text-[#191919]'>Others</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Deploying in digital ocean using CPanel of our backend which is Laravel for API.</li>
              <li>Deploying in Vercel for CI/CD of our frontend which is React/NextJS.</li>
              <li>
                Implementing the importance of Github for our projects/systems for backups and tracking of changes.
              </li>
              <li>Implementing digital ocean spaces for our file storage.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: <img src='/images/company-logo/freelancing.png' alt='freelancing' width={72} />,
      timelineContent: (
        <div>
          <div className='mb-6'>
            <h1 className='font-bold text-lg text-[#191919]'>Freelancing.</h1>
            <h4 className='text-gray-700'>Web Developer</h4>
            <h4 className='text-gray-500 text-xs'>June 2022 - October 2022</h4>
          </div>
          <div>
            <h1 className='font-medium text-[#191919]'>Ultrasound Appointment System</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Developed thesis capstone for my client.</li>
              <li>Patients can make an appointment and create the period calendar.</li>
              <li>Admin will approve of the pending appointments.</li>
              <li>Sending SMS Notification and Email Notification</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: <img src='/images/company-logo/sbc.jpg' alt='sbc' width={72} />,
      timelineContent: (
        <div>
          <div className='mb-6'>
            <h1 className='font-bold text-lg text-[#191919]'>SolutionBase Corp.</h1>
            <h4 className='text-gray-700'>Web Developer</h4>
            <h4 className='text-gray-500 text-xs'>January 2020 - June 2022</h4>
          </div>

          <div>
            <h1 className='font-medium text-[#191919]'>Accounting with Inventory Monitoring System (AIMS)</h1>
            <ul className='list-inside list-disc ml-3 text-gray-600 font-thin text-sm'>
              <li>Maintaining existing software with seniors and develop new features and optimizing system.</li>
              <li>Creating reports and modifying modules tasks.</li>
              <li>One of the contributor when we upgrade to Laravel and VueJS</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <SectionLayout id='experience' className='flex items-center'>
      <div>
        <h1 className='font-bold text-4xl text-[#191919] pt-12 pb-12'>Experience</h1>
      </div>

      <Chrono
        items={items}
        mode='VERTICAL_ALTERNATING'
        disableToolbar={true}
        borderLessCards={true}
        parseDetailsAsHTML={true}
        // lineWidth='3px'
        enableQuickJump={false}
        disableClickOnCircle={true}
        disableNavOnKey={true}
        useReadMore={false}
        // disableTimelinePoint={true}
        theme={{
          primary: '#3B82F6',
          secondary: '',
          cardBgColor: '',
          titleColor: '#191919',
          titleColorActive: '#191919',
        }}
      />
    </SectionLayout>
  )
}

export default ExperienceSection
