import { Box, Flex, Text } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavData } from './HeaderConstants/headerConstants'

export function LayoutHeader() {
  const router = useRouter()

  return (
    <Box className="text-[#ccc5b9] py-2">
      <Box className="cursor-pointer">
        <Flex justify="space-between" align="center" mx="xl" px="xl">
          <Box>
            <Text className="text-md font-bold text-white">
              SAI_HLYAN_PHYOE/
              <span className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:border-b hover:border-b-orange-300">
                FULLSTACK_DEVELOPER
              </span>
            </Text>
          </Box>
          <Flex gap="xl" justify="end" align="center" c="#fffcf2">
            {NavData?.map((nav) => {
              return (
                <Link
                  key={nav.pathname}
                  href={nav.pathname}
                  className={`${
                    router.pathname === nav.pathname
                      ? 'text-[#f7e736] border-b border-b-[#f7e736]'
                      : 'text-[#fffcf2]'
                  } hover:border-b hover:border-b-[#ed6d3c]`}
                >
                  {nav.name}
                </Link>
              )
            })}
          </Flex>
          <Box>
            <Text
              c="#f7e736"
              className="hover:border-b hover:border-b-[#ed6d3c]"
            >
              DOWNLOAD CV
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
