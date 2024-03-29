import { Box, Flex, Stepper, Text, Tooltip } from '@mantine/core'
import { IconBrandGithubFilled, IconCircleCheck } from '@tabler/icons-react'
import Link from 'next/link'
import { useState } from 'react'
import { ToogleNavbarDrawer } from '../Drawer/ToogleNavbarDrawer'

export function LayoutHeader() {
  const [active, setActive] = useState(0)
  return (
    <Box className="text-[#ccc5b9] py-4 bg-[#1d1e30]">
      <Box
        className="cursor-pointer"
        style={{ boxShadow: '#f5f5f755 0px 5px 5px' }}
      >
        <Flex
          justify="space-between"
          align="center"
          className="px-7 md:px-10 lg:px-20"
        >
          <Box className="text-md font-bold text-white">
            <Tooltip className="hidden lg:block" label="I'm just a text">
              <Text className="inline">SAI_HLYAN_PHYOE/</Text>
            </Tooltip>
            <Tooltip className="hidden lg:block" label="Click me to go home!">
              <Link
                href="/"
                className="text-transparent text-xs bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hover:border-b hover:border-b-orange-300"
              >
                <button>FULLSTACK_DEVELOPER</button>
              </Link>
            </Tooltip>
          </Box>
          <Tooltip className="hidden lg:block" label=<Text>goto github?</Text>>
            <Link
              target="_blank"
              href={'https://github.com/SaiHlyanPhyoe7?tab=repositories'}
            >
              <Stepper
                active={active}
                onStepClick={setActive}
                allowNextStepsSelect={false}
                completedIcon={<IconCircleCheck />}
                // iconSize={50}
              >
                <Stepper.Step
                  icon={
                    <IconBrandGithubFilled
                      className="h-3/5 w-3/5"
                      size="1.1rem"
                    />
                  }
                  label=<Text className="text-white">my Github</Text>
                  description=<Text className="hover:underline hover:underline-offset-4 text-white hover:text-blue-400">
                    SaiHlyanPhyoe7
                  </Text>
                />
              </Stepper>
            </Link>
          </Tooltip>

          {/* Toogler Navbar */}
          <ToogleNavbarDrawer />
        </Flex>
      </Box>
    </Box>
  )
}
