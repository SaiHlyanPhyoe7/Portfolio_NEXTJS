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
    <>
      <Drawer
        position="right"
        size={matches ? '50%' : '80%'}
        opened={opened}
        onClose={() => {
          setNavToggle(false)
          close()
        }}
        className="h-full"
        title=<Text className="lg:block hidden">Explorer mine</Text>
        overlayProps={{ opacity: 0.5, blur: 2 }}
      >
        {/* Drawer content */}
        <Flex
          className="m-0 lg:m-[5rem]"
          direction="column"
          gap="xl"
          h="60vh"
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
        <Box>
          <Text
            w="fit-content"
            m="5rem"
            c="#f7e736"
            className="hover:border-b hover:border-b-[#ed6d3c] hidden lg:block"
          >
            <DownloadCV />
          </Text>
        </Box>
      </Drawer>

      <Group position="center" className="lg:ml-0 ml-10">
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
    </>
  )
}
