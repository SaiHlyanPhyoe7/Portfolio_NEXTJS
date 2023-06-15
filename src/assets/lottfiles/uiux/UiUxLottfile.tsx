import React from 'react'
import Lottie from 'lottie-react'
import animation from './UIUX.json'
import { Box } from '@mantine/core'

export const UiUxLottfile = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="h-[300px] w-[300px]">
        <Lottie
          className="loading"
          animationData={animation}
          loop={true}
          autoPlay={true}
        />
      </Box>
    </Box>
  )
}
