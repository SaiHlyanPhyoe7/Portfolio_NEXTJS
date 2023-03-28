import { BackendLottifile } from '@/assets/lottfiles/backend/BackendLottifile'
import { FrontEndLottfile } from '@/assets/lottfiles/frontend/FrontEndLottfile'
import { PencilCompo } from '@/assets/lottfiles/pencil/PencilCompo'
import { UiUxLottfile } from '@/assets/lottfiles/uiux/UiUxLottfile'
import { pencil, personality } from '@/constants/HomeConstants/homeConstants'
import { Box, Divider, Flex, Text, Title, Tooltip } from '@mantine/core'
import Link from 'next/link'
import Velocity from '../components/TestVelocityCompo/Velocity'

export default function Page() {
  return (
    <Box className="text-white h-screen w-full pl-14 text-center space-y-28">
      {/* First Section */}
      <Flex
        direction="column"
        justify="start"
        align="center"
        className="w-full h-[60vh] pt-60 hidden lg:block border-b border-blue-400 rounded-full"
      >
        <Flex justify="center" align="center" gap="xl">
          <Text className="text-[48px] font-semibold">Who Am</Text>
          <Tooltip label="Sai Hlyan Phyoe">
            <Flex justify="space-between" align="center">
              <Text className="text-[48px] text-[#ec9033] font-semibold underline underline-offset-4">
                I
              </Text>
              <Text className="text-[48px] font-semibold">?</Text>
            </Flex>
          </Tooltip>
        </Flex>
        <Text className="text-[24px] font-semibold">
          Let&apos;s Express Through
        </Text>

        <Flex justify="center" align="center">
          <Text
            my="xl"
            className="hover:text-blue-400 duration-300 cursor-pointer"
          >
            This Portfolio!
          </Text>
          <Tooltip label="Let's Explore More..">
            <Link
              href="/about"
              className="underline underline-offset-4 hover:text-blue-800"
            >
              &nbsp;/about
            </Link>
          </Tooltip>
        </Flex>
      </Flex>

      {/* Second Section */}
      <Box className="pt-14 w-full">
        <Flex
          direction="column"
          justify="start"
          align="center"
          className="hidden lg:block"
        >
          <Text mb="xl" className="text-start text-gray-400 text-2xl">
            What Can I Bring To the Table?
          </Text>
          <Divider />

          <Box className="grid grid-cols-12">
            <Box className="col-span-1 my-auto">
              <Text className="text-[36px] break-words w-[10px] text-blue-400">
                Personality
              </Text>
            </Box>
            <Box className="col-span-11">
              {personality.map((personality) => {
                return (
                  <Box key={personality.name}>
                    <Box className="grid text-start my-24 grid-cols-12">
                      <Box className="col-span-8 my-auto">
                        <Text fz="xl" className="text-gray-400">
                          {personality.desc}
                        </Text>
                      </Box>
                      <Box className="col-span-3">
                        <Title className="text-[56px]">
                          {personality.name}
                        </Title>
                      </Box>
                    </Box>
                    <Divider />
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Third Section */}
      <Box className="pt-14 h-[60%] w-full">
        <Flex
          direction="column"
          justify="start"
          align="center"
          className="hidden lg:block border border-blue-400"
        >
          <Text className="text-[#ec9033] text-center text-[10rem]">
            Think Outside the SQUARE Space
          </Text>
        </Flex>
      </Box>

      {/* Fourth Section */}
      <Box className="w-full h-fit">
        <Box className="grid grid-cols-12">
          {pencil.map((pencil) => {
            return (
              <Box key={pencil} className="col-span-4">
                <PencilCompo />
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Fifth Section */}
      <Box className="h-10vh">
        <Velocity />
      </Box>

      {/* Sixth Section */}
      <Box>
        <Box>
          <Text className="text-[4rem] text-gray-400 text-start">
            What Can i DO?
          </Text>
          <Text className="pl-[5rem] text-[2rem] text-start text-gray-600">
            Design is not just what it looks like and feels like. Design is how
            it works.
          </Text>
        </Box>
        <Text className="py-[8rem]">I am a...</Text>
        <Flex justify="space-evenly" pb="1000px" align="start">
          <Box className="rounded-md border p-8 border-white">
            <Text>Frontend Developer</Text>
            <FrontEndLottfile />
            <Text className="w-[300px] text-start" fz="md">
              As a Front-end developers, I take responsible for creating the
              user-facing side of websites and web applications. I work mainly
              with React, Tailwind,Redux and other necessary tools to build
              responsive designs that look great on any device. I also make sure
              that websites are fast, accessible, and user-friendly.
            </Text>
          </Box>
          <Box className="rounded-md border p-8 border-white">
            <Text>UI UX Designer</Text>
            <UiUxLottfile />
            <Text className="w-[300px] text-start">
              As a Back-end developers, I focus on creating the server-side
              functionality that powers websites and web applications. I work
              mainly with nodeJs, ExpressJs and NestJs to build databases, APIs,
              and other back-end components that interact with the front-end. I
              also make ensure that websites are secure, scalable, and
              performance.
            </Text>
          </Box>
          <Box className="rounded-md border p-8 border-white">
            <Text>Backend Developer</Text>
            <BackendLottifile />
            <Text className="w-[300px] text-start">
              As a UI/UX designers,I focus on creating interfaces that meet user
              needs while also delivering business value. I also work to ensure
              that the design is implemented correctly and delivers a seamless
              experience across all devices. My goal is to create interfaces
              that are intuitive, visually pleasing, and improve user
              engagement.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
