import { Box, Flex, Text } from '@mantine/core'

export function LayoutHeader() {
  return (
    <Box className="text-[#ccc5b9">
      <Box className="cursor-pointer">
        <Flex justify="space-between" align="center" mx="xl" px="xl">
          <Box>
            <Text className="text-md font-bold text-white">
              SAI_HLYAN_PHYOE/
              <span className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                FULLSTACK_DEVELOPER
              </span>
            </Text>
          </Box>
          <Flex gap="xl" justify="end" align="center" c="#fffcf2">
            <Text className="hover:border-b hover:border-b-orange-300">
              HOME
            </Text>
            <Text className="hover:border-b hover:border-b-orange-300">
              PROJECTS
            </Text>
            <Text className="hover:border-b hover:border-b-orange-300">
              ABOUT
            </Text>
            <Text className="hover:border-b hover:border-b-orange-300">
              SKILLS
            </Text>
            <Text className="hover:border-b hover:border-b-orange-300">
              CONTACT
            </Text>
          </Flex>
          <Box>
            <Text
              c="#fffcf2"
              className="hover:border-b hover:border-b-orange-300"
            >
              DOWNLOAD CV
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
