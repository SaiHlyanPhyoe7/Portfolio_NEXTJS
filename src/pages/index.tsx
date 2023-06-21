import { LWIcon, wcid } from '@/constants/HeaderConstants/headerConstants'
import { personality } from '@/constants/HomeConstants/homeConstants'
import { Box, Divider, Flex, Text, Title, Tooltip } from '@mantine/core'
import Link from 'next/link'
import Velocity from '../components/Animation/TestVelocityCompo/Velocity'
import { motion } from 'framer-motion'
import TextHoverImg from '@/components/TextHoverImg'

export default function Page() {
  return (
    <Box className="text-white h-screen w-full lg:p-14 text-center space-y-8 lg:space-y-28 px-8">
      {/* First Section */}
      <Flex
        direction="column"
        justify="start"
        align="center"
        className="w-full lg:h-[60vh] pt-14 lg:pt-60 block border-b border-blue-400 rounded-full"
      >
        <Flex justify="center" align="center" gap="xl">
          <TextHoverImg>
            <Text className="text-[48px] font-semibold">Who Am</Text>
          </TextHoverImg>
          <Flex justify="space-between" align="center">
            <Tooltip
              className="hidden lg:block"
              label=<Text>Sai Hlyan Phyoe</Text>
            >
              <Text className="text-[48px] text-[#ec9033] font-semibold">
                I
              </Text>
            </Tooltip>
            <Text className="text-[48px] font-semibold">?</Text>
          </Flex>
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
              className="underline underline-offset-4 text-green-400"
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
          className="block"
        >
          <Text mb="xl" className="text-start text-gray-400 text-2xl">
            What Can I Bring To the Table?
          </Text>
          <Divider />

          <Box className="grid grid-cols-12">
            <Box className="col-span-1 my-auto">
              <Text className="text-[25px] lg:text-[36px] break-words w-[10px] text-blue-400">
                Personality
              </Text>
            </Box>
            <Box className="col-span-11">
              {personality.map((personality) => {
                return (
                  <Box key={personality.name}>
                    <Box className="grid text-start my-4 lg:my-24 grid-cols-12">
                      <Box className="col-span-8 my-auto">
                        <Text className="text-sm lg:text-lg text-gray-400">
                          {personality.desc}
                        </Text>
                      </Box>
                      <Box className="col-span-3">
                        <Title className="text-[20px] lg:text-[56px]">
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
      <Box className="relative pt-0 lg:py-14 lg:h-[60%] w-full">
        <span className="absolute top-0 w-40 lg:h-[380px] lg:w-[630px] h-20 border border-blue-400"></span>
        <Text className="text-[#ec9033] text-center text-[25px] lg:text-[100px]">
          Think Outside the SQUARE Space
        </Text>
      </Box>

      {/* Fourth Section */}
      {/* <Box className="w-full h-fit lg:pt-14">
        <Box className="grid grid-cols-12">
          {pencil.map((pencil) => {
            return (
              <Box key={pencil} className="col-span-4">
                <PencilCompo />
              </Box>
            )
          })}
        </Box>
      </Box> */}

      {/* Fifth Section */}
      <Box className="h-10vh">
        <Velocity />
      </Box>

      {/* Sixth Section */}
      <Box className="">
        <Box>
          <Text className="text-[30px] lg:text-[50px] text-gray-400 text-start">
            What Can i DO?
          </Text>
          <Text className="lg:pl-[5rem] text-sm lg:text-[25px] text-start text-gray-600">
            Design is not just what it looks like and feels like. Design is how
            it works.
          </Text>
        </Box>
        <Text className="py-20 lg:py-[8rem] text-[#ec9033]">I am a...</Text>
        <Box className="grid grid-cols-12 space-y-8 lg:space-y-0 space-x-3 pb-[100px] lg:pb-0">
          {wcid.map((data) => {
            return (
              <Box
                key={data.name}
                className="rounded-md border px-4 py-8 lg:p-8 col-span-12 lg:col-span-4 border-white"
              >
                <Text className="my-12">{data.name}</Text>
                {data.icon}
                <Text
                  className="lg:w-[300px] text-center w-full m-auto"
                  fz="md"
                >
                  {data.desc}
                </Text>
              </Box>
            )
          })}
        </Box>
      </Box>

      {/* Seventh Section */}
      <Box h="200px" className="text-start hidden lg:block">
        <Box className="grid grid-cols-12">
          <Box className="hidden lg:grid col-span-4"></Box>
          <motion.div>
            <Box className="text-center h-full w-full col-span-12 lg:col-span-2">
              <Flex align="center" className="h-full ">
                GOTO :
              </Flex>
            </Box>
          </motion.div>
          <Flex className="col-span-6 lg:gap-8">
            {LWIcon.map((data) => {
              return (
                <Tooltip key={data.name} label="Drag me">
                  <Link href={data.link} className="mt-6 hover:text-blue-400">
                    <motion.p
                      drag
                      dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50
                      }}
                      dragElastic
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {data.icon}
                      {data.name}
                    </motion.p>
                  </Link>
                </Tooltip>
              )
            })}
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
