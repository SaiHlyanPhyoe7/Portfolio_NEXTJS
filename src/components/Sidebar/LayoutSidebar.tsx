import { Box } from '@mantine/core'
import useRealtimeDateTime from '@/hook/useRealtimeDateTime'

export function LayoutSidebar() {
  const dateTime = useRealtimeDateTime()
  const formattedDateTime = dateTime.format('DD/MM/YYYY HH:mm:ss')

  return (
    <Box h="90%" className="rounded-3xl">
      <Box
        c="#f1ed7e"
        className="h-[30%] border-r absolute bottom-[23rem] rounded-full p-7 border-blue-400"
      />
      <span className="text-white absolute -rotate-90 -left-16 top-[28rem] cursor-help">
        {formattedDateTime}
      </span>
    </Box>
  )
}
