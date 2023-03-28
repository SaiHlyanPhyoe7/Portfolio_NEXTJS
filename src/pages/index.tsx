import { PencilCompo } from '@/assets/lottfiles/pencil/PencilCompo'
import { pencil, personality } from '@/constants/HomeConstants/homeConstants'
import { Box, Divider, Flex, Text, Title, Tooltip } from '@mantine/core'
import Link from 'next/link'

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
      <Box className="w-full h-full">
        <Box className="grid grid-cols-12">
          {pencil.map((pencil) => {
            return (
              <Box key={pencil} className="col-span-1">
                <PencilCompo />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
