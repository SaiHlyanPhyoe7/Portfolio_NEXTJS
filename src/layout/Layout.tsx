import { LayoutHeader } from '@/components/Header/LayoutHeader'
import { LayoutSidebar } from '@/components/Sidebar/LayoutSidebar'
import { type TChild } from '@/types/types'
import { Box, Affix, Button, Transition, rem } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'

export function Layout({ children }: TChild) {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box className="h-[85vh]">
      <Box className="sticky top-0 left-0 z-50">
        <LayoutHeader />
      </Box>
      <Box className="flex">
        <Box className="w-[3rem] h-[43.5rem] z-10">
          <LayoutSidebar />
        </Box>
        <Box className="h-full w-full">
          <main>{children}</main>
        </Box>
        <Affix position={{ bottom: rem(20), right: rem(20) }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<IconArrowUp size="1rem" />}
                style={transitionStyles}
                onClick={() => {
                  scrollTo({ y: 0 })
                }}
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
        {/* <Box className="bg-indigo-300 fixed left-0 bottom-0 w-screen py-4">
          <LayoutFooter />
        </Box> */}
      </Box>
    </Box>
  )
}
