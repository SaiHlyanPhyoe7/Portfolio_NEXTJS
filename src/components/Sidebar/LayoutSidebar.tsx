import { quote } from '@/constants/constants'
import { Box } from '@mantine/core'

export function LayoutSidebar() {
  return (
    <Box h="90%" className="rounded-3xl">
      <Box
        c="#f1ed7e"
        className="h-[70%] border-r fixed left-1 bottom-[10.5rem] rounded-full p-7 border-blue-400"
      />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-pink-600 fixed -rotate-90 -left-[16rem] top-[28rem] cursor-help">
        {quote}
      </span>
    </Box>
  )
}
