import { CgGym, CgCode, CgRead, CgLink, CgProfile } from 'react-icons/cg'
import { FaGithub, FaLink } from 'react-icons/fa'
export default function Home() {
  const skills = [
    { image: '/images/php.png', label: 'php' },
    { image: '/images/laravel.png', label: 'laravel' },
    { image: '/images/react.png', label: 'react' },
    { image: '/images/html.png', label: 'HTML' },
    { image: '/images/css.png', label: 'CSS' },
    { image: '/images/js.png', label: 'javaScript' },
    { image: '/images/bootstrap.png', label: 'bootstrap' },
    { image: '/images/material.png', label: 'material ui' },
    { image: '/images/jquery.png', label: 'JQuery' },
    { image: '/images/git.png', label: 'git' },
    { image: '/images/tailwind.png', label: 'tailwind' },
    { image: '/images/sass.png', label: 'sass' },
  ]

  const abouts = [
    {
      title: 'coding',
      icon: <CgCode size={'3em'} />,
      description:
        "coding has become more than a skill—it's a lifestyle that empowers me to sculpt my imagination into functional and elegant digital experiences.",
    },
    {
      title: 'workout',
      icon: <CgGym size={'3em'} />,
      description:
        "Balancing the mental rigor of coding with physical exertion to achieve holistic well-being can be challenging, but I'm committed to sculpting both my code and my physique with equal dedication.",
    },
    {
      title: 'reading',
      icon: <CgRead size={'3em'} />,
      description:
        'I immerse myself in books of self-improvement, enriching my inner landscape with insights that empower personal growth, resilience, and a harmonious balance between honing my coding craft and nurturing my soul.',
    },
  ]

  return (
    <>
      <div className='max-w-[60rem] mx-auto'>
        {/* HERO PAGE */}
        <section>
          <div className='h-screen flex items-center'>
            <div
              className='w-full md:w-1/2 text-center md:text-left
             text-secondary-dark'
            >
              <p className='text-xl font-extralight'>HELLO,</p>
              <h1 className='text-4xl font-bold tracking-widest'>I AM GLENMORE</h1>
              <h4 className='text-xl font-extralight mb-6'>PHP | LARAVEL | REACTJS DEVELOPER</h4>
              <p className='text-lg mb-6 text-gray-700'>
                <span>
                  I'm here to help you create a strong online presence that reflects your brand and engages your
                  audience. Let's build something great together!
                </span>
              </p>

              <a href='mailto:ilaganglenmore019@gmail.com' target='_blank'>
                <button className='border border-primary-blue hover:scale-105 w-32 p-2 text-primary-blue font-semibold rounded-md uppercase text-sm'>
                  Contact Me
                </button>
              </a>
            </div>
            <div className='flex-1 hidden md:flex justify-center'>
              <img src='/images/laravel.png' alt='laravel' width={200} />
            </div>
          </div>
        </section>
      </div>
      {/* ABOUT */}
      {/* <section>
        <div className='bg-[#FAFAFA] py-20'>
          <div className='max-w-[60rem] mx-auto flex justify-center flex-col md:flex-row gap-3 text-secondary-dark'>
            {abouts.map((about, i) => (
              <div key={i} className='md:w-1/3 p-6 border border-gray-100 rounded-e-m rounded-md'>
                <div className='mb-10'>
                  <div className='flex justify-center'>{about.icon}</div>
                </div>
                <div className='md:h-[10rem] flex'>
                  <p className='text-sm text-justify'>{about.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* SKILLS */}
      <section>
        <div className=' h-[60vh] flex justify-center items-center'>
          <div className='max-w-[60rem] mx-auto'>
            <div className='flex justify-center flex-wrap gap-6 grayscale'>
              {skills.map((skill, i) => (
                <div key={i} className='flex items-center gap-3 shadow-lg w-1/6 p-3'>
                  <div className=''>
                    <img src={skill.image} alt={skill.label} width={35} />
                  </div>
                  <div className='flex-1'>
                    <p className='text-center text-sm capitalize'>{skill.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section>
        <div className='flex justify-center items-center'>
          <div className='max-w-[60rem] mx-auto'>
            <div className='flex justify-center flex-wrap gap-6'>
              <div className='flex gap-3 border border-gray-100 rounded-md p-10 w-[45%]'>
                <div className='flex-1 relative'>
                  <div className='flex gap-3 mb-5 items-center'>
                    <div>
                      <CgProfile size={'3em'} color='#FF6600' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-xl capitalize tracking-widest font-bold'>iPOS</p>
                      <span className='text-xs text-gray-500'>Inventory Point of Sale - 2019</span>
                    </div>
                    <div className='flex gap-3'>
                      <a href='https://github.com/glenmoreilagan/iPOS' target='_blank' title='View repository'>
                        <FaGithub size={'1em'} color='#00829b' />
                      </a>
                      <a href='#' title='View site'>
                        <FaLink size={'1em'} color='#00829b' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='text-justify text-sm capitalize mb-20'>
                      iPOS, which stands for Inventory Point of Sale, is an innovative and user-friendly system designed
                      to revolutionize the way businesses handle both inventory management and point-of-sale
                      transactions. With iPOS, businesses can effortlessly monitor their stock levels, track product
                      movement, and manage sales in real-time. The system's intuitive interface simplifies the process
                      of conducting transactions, generating invoices, and keeping a close eye on product availability.
                    </p>
                  </div>
                  <div className='flex justify-between items-center  absolute bottom-5 w-full'>
                    <p className='text-[9px] text-center flex gap-[2px]'>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>HTML</span>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>CSS</span>
                      <span className='bg-purple-500 px-3 py-1 rounded-xl text-white'>BOOTSTRAP</span>
                      <span className='bg-yellow-500 px-3 py-1 rounded-xl text-white'>JS</span>
                      <span className='bg-red-500 px-3 py-1 rounded-xl text-white'>LARAVEL</span>
                      <span className='bg-gray-500 px-3 py-1 rounded-xl text-white'>MYSQL</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-3 border border-gray-100 rounded-md p-10 w-[45%]'>
                <div className='flex-1 relative'>
                  <div className='flex gap-3 mb-5 items-center'>
                    <div>
                      <CgProfile size={'3em'} color='#FF6600' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-xl capitalize tracking-widest font-bold'>CAS</p>
                      <span className='text-xs text-gray-500'>Clinic Appointment System - 2021</span>
                    </div>
                    <div className='flex gap-3'>
                      <a href='#' title='View site'>
                        <FaGithub size={'1em'} color='#00829b' />
                      </a>
                      <a href='#' title='View site'>
                        <FaLink size={'1em'} color='#00829b' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='text-justify text-sm capitalize mb-20'>
                      The Clinic Appointment System (CAS) is a specialized and tailored solution designed to streamline
                      and enhance the process of managing appointments for pregnant individuals. CAS offers a seamless
                      and user-friendly platform that caters specifically to the unique needs of clinics and expecting
                      mothers. With CAS, clinics can efficiently schedule and organize prenatal appointments, ensuring
                      optimal care and timely medical attention for pregnant individuals.
                    </p>
                  </div>
                  <div className='flex justify-between items-center  absolute bottom-5 w-full'>
                    <p className='text-[9px] text-center flex gap-[2px]'>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>HTML</span>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>CSS</span>
                      <span className='bg-purple-500 px-3 py-1 rounded-xl text-white'>BOOTSTRAP</span>
                      <span className='bg-yellow-500 px-3 py-1 rounded-xl text-white'>JS</span>
                      <span className='bg-red-500 px-3 py-1 rounded-xl text-white'>PHP</span>
                      <span className='bg-gray-500 px-3 py-1 rounded-xl text-white'>MYSQL</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-3 border border-gray-100 rounded-md p-10 w-[45%]'>
                <div className='flex-1 relative'>
                  <div className='flex gap-3 mb-5 items-center'>
                    <div>
                      <CgProfile size={'3em'} color='#FF6600' />
                    </div>
                    <div className='flex-1'>
                      <p className='text-xl capitalize tracking-widest font-bold'>LMS</p>
                      <span className='text-xs text-gray-500'>Leave Management System - 2021</span>
                    </div>
                    <div className='flex gap-3'>
                      <a href='#' title='View site'>
                        <FaGithub size={'1em'} color='#00829b' />
                      </a>
                      <a href='#' title='View site'>
                        <FaLink size={'1em'} color='#00829b' />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className='text-justify text-sm capitalize mb-20'>
                      The Leave Management System (LMS) is a tailored solution designed to simplify and automate the
                      process of managing employee leave for small businesses. LMS offers a user-friendly platform that
                      caters specifically to the unique needs of small enterprises, helping them effectively track and
                      manage employee time off while ensuring smooth operations.
                    </p>
                  </div>
                  <div className='flex justify-between items-center  absolute bottom-5 w-full'>
                    <p className='text-[9px] text-center flex gap-[2px]'>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>HTML</span>
                      <span className='bg-blue-500 px-3 py-1 rounded-xl text-white'>CSS</span>
                      <span className='bg-purple-500 px-3 py-1 rounded-xl text-white'>BOOTSTRAP</span>
                      <span className='bg-sky-500 px-3 py-1 rounded-xl text-white'>REACTJS</span>
                      <span className='bg-red-500 px-3 py-1 rounded-xl text-white'>LARAVEL</span>
                      <span className='bg-gray-500 px-3 py-1 rounded-xl text-white'>MYSQL</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
