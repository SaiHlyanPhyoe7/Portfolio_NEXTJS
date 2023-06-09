import { LayoutHeader } from '@/components/Header/LayoutHeader'
import { LayoutSidebar } from '@/components/Sidebar/LayoutSidebar'
import { type TChild } from '@/types/types'
import { Box, Affix, Transition, rem } from '@mantine/core'
import { IconArrowUp } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'
import { useRouter } from 'next/router'

export function Layout({ children }: TChild) {
  const [scroll, scrollTo] = useWindowScroll()
  const router = useRouter()

  return (
    <Box className="h-[85vh]">
      <Box className="sticky top-0 left-0 z-50">
        <LayoutHeader />
      </Box>
      <Box className="flex">
        <Box className={`${router.pathname === '/' ? '' : 'hidden'}`}>
          <Box className="hidden lg:block h-[43.5rem] z-10">
            <LayoutSidebar />
          </Box>
        </Box>
        <Box className="h-full w-full">
          <main>{children}</main>
        </Box>
        <Affix
          className={`${router.pathname !== '/' ? 'hidden' : ''}`}
          position={{ bottom: rem(20), right: rem(20) }}
        >
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Box
                className="text-white rounded-full h-[100px]"
                style={transitionStyles}
                onClick={() => {
                  scrollTo({ y: 0 })
                }}
              >
                <IconArrowUp
                  size="3rem"
                  className="bg-emerald-600 p-2 animate-bounce rounded-full"
                />
              </Box>
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
