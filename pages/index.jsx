import ContactSection from '@/components/contact-section'
import FooterSection from '@/components/footer-section'
import HeroSection from '@/components/hero-section'
import ProjectSection from '@/components/project-secion'
import SkillsSection from '@/components/skills-section'

import { CgGym, CgCode, CgRead, CgLink, CgProfile } from 'react-icons/cg'
import { FaGithub, FaLink } from 'react-icons/fa'

export default function Home() {
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
      <nav className='bg-white p-10 sticky top-0 z-10 border-b-[1px]'>
        <ul className='flex gap-3 justify-center'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
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

      {/* CONTACT */}
      <ContactSection />

      {/* FOOTER */}
      <FooterSection />
    </>
  )
}
