import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import ContactSection from '@/components/contact-section'
import FooterSection from '@/components/footer-section'
import HeroSection from '@/components/hero-section'
import ProjectSection from '@/components/project-secion'
import SkillsSection from '@/components/skills-section'
const ExperienceSection = dynamic(() => import('@/components/experience'), { ssr: false })

import { CgGym, CgCode, CgRead } from 'react-icons/cg'

export default function Home() {
  const router = useRouter()
  const [activeNav, setActiveNav] = useState(null)
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

  const handleNavLinkActive = (e) => {
    setActiveNav('#' + e.target.href.split('#')[1])
  }

  useEffect(() => {
    setActiveNav('#' + router.asPath.split('#')[1])
  }, [])

  return (
    <>
      <nav className='bg-white p-10 sticky top-0 z-10 border-b-[1px]'>
        <ul className='flex gap-6 justify-center'>
          <li>
            <a
              href='#home'
              className={`hover:font-bold transition-all delay-100 ${activeNav === '#home' && 'font-bold'}`}
              onClick={handleNavLinkActive}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className={`hover:font-bold transition-all delay-100  ${activeNav === '#skills' && 'font-bold'}`}
              onClick={handleNavLinkActive}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className={`hover:font-bold transition-all delay-100 ${activeNav === '#projects' && 'font-bold'}`}
              onClick={handleNavLinkActive}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href='#experience'
              className={`hover:font-bold transition-all delay-100 ${activeNav === '#experience' && 'font-bold'}`}
              onClick={handleNavLinkActive}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className={`hover:font-bold transition-all delay-100 ${activeNav === '#contact' && 'font-bold'}`}
              onClick={handleNavLinkActive}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* HERO PAGE */}
      <HeroSection />
      {/* ABOUT */}

      {/* SKILLS */}
      <SkillsSection />

      {/* PROJECTS */}
      <ProjectSection />

      {/* EXPERIENCE */}
      <ExperienceSection />

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  )
}
