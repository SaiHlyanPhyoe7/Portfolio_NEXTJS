import { headerQuote } from '@/constants/HeaderConstants/headerConstants'
import { Box, Flex, Text } from '@mantine/core'
import { ToogleNavbarDrawer } from '../Drawer/ToogleNavbarDrawer'

export function LayoutHeader() {
  return (
    <Box className="text-[#ccc5b9] py-4 bg-[#252422]">
      <Box className="cursor-pointer">
        <Flex justify="space-between" align="center" mx="xl" px="xl">
          <Box>
            <Text className="ml-12 text-md font-bold text-white">
              SAI_HLYAN_PHYOE/
              <span className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:border-b hover:border-b-orange-300">
                FULLSTACK_DEVELOPER
              </span>
            </Text>
          </Box>
          <Box>
            <Text opacity="0.5" className="text-sm">
              {headerQuote}
            </Text>
          </Box>

          {/* Toogler Navbar */}
          <Box>
            <ToogleNavbarDrawer />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
