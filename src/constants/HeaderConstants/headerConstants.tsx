import {
  IconBrandLinkedin,
  IconBrandMeta,
  IconMailOpened
} from '@tabler/icons-react'

export const NavData = [
  {
    pathname: '/home',
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
