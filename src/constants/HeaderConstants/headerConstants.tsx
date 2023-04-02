import { BackendLottifile } from '@/assets/lottfiles/backend/BackendLottifile'
import { FrontEndLottfile } from '@/assets/lottfiles/frontend/FrontEndLottfile'
import { UiUxLottfile } from '@/assets/lottfiles/uiux/UiUxLottfile'
import {
  IconAddressBook,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandReact,
  IconBrandTypescript,
  IconHome,
  IconMailOpened,
  IconUserCircle
} from '@tabler/icons-react'

export const NavData = [
  {
    pathname: '/',
    name: 'HOME'
  },
  {
    pathname: '/projects',
    name: 'PROJECTS'
  },
  {
    pathname: '/about',
    name: 'ABOUT'
  },
  {
    pathname: '/skills',
    name: 'SKILLS'
  },
  {
    pathname: '/contact',
    name: 'CONTACT'
  }
]

export const headerQuote =
  'THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO!'

export const wcid = [
  {
    name: 'Frontend Developer',
    icon: <FrontEndLottfile />,
    desc: 'As a Front-end developers, I take responsible for creating the user-facing side of websites and web applications. I work mainly with React, Tailwind,Redux and other necessary tools to build responsive designs that look great on any device. I also make sure that websites are fast, accessible, and user-friendly.'
  },
  {
    name: 'UI UX Designer',
    icon: <UiUxLottfile />,
    desc: 'As a UI/UX designers,I focus on creating interfaces that meet user needs while also delivering business value. I also work to ensure that the design is implemented correctly and delivers a seamless experience across all devices. My goal is to create interfaces that are intuitive, visually pleasing, and improve user engagement.'
  },
  {
    name: 'Backend Developer',
    icon: <BackendLottifile />,
    desc: 'As a Back-end developers, I focus on creating the server-side functionality that powers websites and web applications. I work mainly with nodeJs, ExpressJs and NestJs to build databases, APIs, and other back-end components that interact with the front-end. I also make ensure that websites are secure, scalable, and performance.'
  }
]

export const navStepper = [
  {
    name: 'LinkedIn',
    icon: <IconBrandLinkedin className="" size="1.1rem" />,
    link: 'https://github.com/SaiHlyanPhyoe7?tab=repositories'
  },
  {
    name: 'Facebook',
    icon: <IconBrandMeta className="" size="1.1rem" />,
    link: 'https://github.com/SaiHlyanPhyoe7?tab=repositories'
  },
  {
    name: 'Email',
    icon: <IconMailOpened className="" size="1.1rem" />,
    link: 'https://github.com/SaiHlyanPhyoe7?tab=repositories'
  }
]

export const LWIcon = [
  {
    link: '/',
    icon: <IconHome className="w-full" />,
    name: 'Home'
  },
  {
    link: '/projects',
    icon: <IconBrandReact className="w-full" />,
    name: 'Projects'
  },
  {
    link: 'about',
    icon: <IconUserCircle className="w-full" />,
    name: 'About'
  },
  {
    link: 'skills',
    icon: <IconBrandTypescript className="w-full" />,
    name: 'Skills'
  },
  {
    link: 'contact',
    icon: <IconAddressBook className="w-full" />,
    name: 'Contact'
  }
]
