import { quote } from '@/constants/constants'
import { Box } from '@mantine/core'

export function LayoutSidebar() {
  return (
    <Box className="rounded-3xl h-full relative">
      <Box
        c="#f1ed7e"
        className="h-full border-r absolute rounded-full p-7 border-blue-400"
      />
      <Box className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-[#f7e736] w-[600px] -rotate-90 cursor-help absolute -left-[17rem] top-[20.8rem]">
        {quote}
      </Box>
    </Box>
  )
}
