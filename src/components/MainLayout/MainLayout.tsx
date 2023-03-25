import { Box, Text } from '@mantine/core'

interface childProps {
  children: React.ReactNode
}

export function MainLayout({ children }: childProps) {
  return (
    <Box bg="pink">
      <Text>I am main layout and i have a children</Text>
      {children}
    </Box>
  )
}
