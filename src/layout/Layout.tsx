import { LayoutFooter } from '@/components/Footer/LayoutFooter'
import { LayoutHeader } from '@/components/Header/LayoutHeader'
import { LayoutSidebar } from '@/components/Sidebar/LayoutSidebar'
import { Box } from '@mantine/core'

// Delcare Types
interface TChild {
  children: React.ReactNode
}

export function Layout({ children }: TChild) {
  return (
    <Box>
      <LayoutHeader />
      <LayoutSidebar />
      <main>{children}</main>
      <LayoutFooter />
    </Box>
  )
}
