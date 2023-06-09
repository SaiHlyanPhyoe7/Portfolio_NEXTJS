import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { Box, Drawer, Flex, Group, Text } from '@mantine/core'
import { useState } from 'react'
import { NavData } from '../../constants/HeaderConstants/headerConstants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DownloadCV } from '../../components/DownloadCV/DownloadCV'

export function ToogleNavbarDrawer() {
  const [opened, { open, close }] = useDisclosure(false)
  const [navToggle, setNavToggle] = useState(false)
  const router = useRouter()
  const matches = useMediaQuery('(min-width: 1024px)')

  return (
    <Box>
      <Drawer
        position="right"
        size={matches ? '50%' : '80%'}
        opened={opened}
        onClose={() => {
          setNavToggle(false)
          close()
        }}
        className="h-full"
        title=<Text className="lg:block hidden">Explorer more</Text>
        overlayProps={{ opacity: 0.5, blur: 2 }}
      >
        {/* Drawer content */}
        <Flex
          className="m-0 lg:m-[5rem] h-[55vh] lg:h-[40vh]"
          direction="column"
          gap="xl"
          h=""
          justify={matches ? 'start' : 'center'}
          align={matches ? 'start' : 'center'}
          c="#fffcf2"
        >
          {NavData?.map((nav) => {
            return (
              <Link
                key={nav.name}
                onClick={() => {
                  setNavToggle(false)
                  close()
                }}
                href={nav.pathname}
              >
                <Text
                  className={`${
                    router.pathname === nav.pathname
                      ? 'text-[#f7e736] border-b border-b-[#f7e736]'
                      : 'text-[#fffcf2]'
                  } hover:border-b hover:border-b-[#ed6d3c]`}
                  align="center"
                >
                  {nav.name}
                </Text>
              </Link>
            )
          })}
        </Flex>
        <Text
          w="fit-content"
          c="#f7e736"
          className="m-0 lg:mx-[5rem] w-full lg:w-auto lg:text-start text-center"
        >
          <DownloadCV />
        </Text>
      </Drawer>

      <Group position="center" className="">
        <button
          onClick={() => {
            setTimeout(() => {
              open()
            }, 800)
            setNavToggle(!navToggle)
          }}
          className="toggle overflow-hidden flex justify-center items-center relative w-[70px] h-[70px] shadow-sm hover:shadow-xl duration-300 cursor-pointer rounded-lg hover:opacity-[0.9]"
        >
          {/* w42 h4 w25 * w40 h4 * w42 h4 w15 25  */}
          <span
            className={`absolute h-[4px] bg-[#f7e736] rounded-md duration-[0.5s] delay-[0.125s]  left-[13px]
          ${
            navToggle
              ? 'w-[30px] translate-y-[0px] rotate-[45deg]'
              : 'w-[25px] translate-y-[-15px]'
          }`}
          ></span>
          <span
            className={`absolute w-[40px] h-[4px] bg-emerald-400 rounded-md duration-[0.5s] 
          ${
            navToggle
              ? 'translate-x-[60px] delay-[0.1s]'
              : 'translate-x-[-3px] delay-[0.4s]'
          }`}
          ></span>
          <span
            className={`absolute h-[4px] bg-[#f7e736] rounded-md duration-[0.5s] delay-[0.25s] left-[13px]
          ${
            navToggle
              ? 'w-[30px] translate-y-[0px] rotate-[315deg]'
              : 'w-[15px] translate-y-[15px]'
          }`}
          ></span>
        </button>
      </Group>
    </Box>
  )
}
