import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
  IconPhone
} from '@tabler/icons-react'

export const contactInfo = [
  {
    icon: <IconPhone className="text-orange-400" />,
    desc: '09263141207'
  },
  {
    icon: <IconMail className="text-orange-400" />,
    desc: 'saihlyan.phyoe7@gmail.com'
  },
  {
    icon: <IconMapPin className="text-orange-400" />,
    desc: 'South Horse Race Course Road,Tamwe Township, Yangon'
  }
]
export const socialContactInfoLogo = [
  {
    icon: (
      <IconBrandFacebook
        className="bg-[#6cbafb44] hover:border-2 border-orange-400 p-2 rounded-full"
        size="50px"
      />
    ),
    link: 'https://www.facebook.com/saihlyan.phyoe7'
  },
  {
    icon: (
      <IconBrandInstagram
        className="bg-[#6cbafb44] hover:border-2 border-orange-400 p-2 rounded-full"
        size="50px"
      />
    ),
    link: 'https://instagram.com/__saihlyanphyoe'
  },
  {
    icon: (
      <IconBrandLinkedin
        className="bg-[#6cbafb44] hover:border-2 border-orange-400 p-2 rounded-full"
        size="50px"
      />
    ),
    link: 'https://www.linkedin.com/in/saihlyan-phyoe7/'
  }
]
