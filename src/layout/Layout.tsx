import { LayoutHeader } from '@/components/Header/LayoutHeader'
import { LayoutSidebar } from '@/components/Sidebar/LayoutSidebar'
import { Box } from '@mantine/core'

// Delcare Types
interface TChild {
  children: React.ReactNode
}

export function Layout({ children }: TChild) {
  return (
    <Box className="bg-[#252422]">
      <Box className="py-4">
        <LayoutHeader />
      </Box>
      <Box className="flex">
        <Box className="w-[4.5rem] h-screen bg-green-300">
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
