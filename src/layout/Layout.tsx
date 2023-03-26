import { LayoutHeader } from '@/components/Header/LayoutHeader'
import { LayoutSidebar } from '@/components/Sidebar/LayoutSidebar'
import { type TChild } from '@/types/types'
import { Box } from '@mantine/core'

export function Layout({ children }: TChild) {
  return (
    <Box className="bg-[#252422]">
      <Box className="py-4">
        <LayoutHeader />
      </Box>
      <Box className="flex">
        <Box className="w-[3rem] h-screen">
          <LayoutSidebar />
        </Box>
        <Box className="">
          <main>{children}</main>
        </Box>
        {/* <Box className="bg-indigo-300 fixed left-0 bottom-0 w-screen py-4">
          <LayoutFooter />
        </Box> */}
      </Box>
    </Box>
  )
}
