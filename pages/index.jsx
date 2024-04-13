import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

import ContactSection from '@/components/contact-section'
import FooterSection from '@/components/footer-section'
import HeroSection from '@/components/hero-section'
import ProjectSection from '@/components/project-secion'
import SkillsSection from '@/components/skills-section'
const ExperienceSection = dynamic(() => import('@/components/experience'), { ssr: false })

import { CgGym, CgCode, CgRead } from 'react-icons/cg'
import Navigation from '@/components/layouts/Navigation'

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
      {/* NAVIGATION */}
      <Navigation />

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
