import React from 'react'
import Lottie from 'lottie-react'
import animation from './pencil_drawing.json'
import { Box } from '@mantine/core'

export const PencilCompo = () => {
  return (
    <Box className="flex justify-center items-center">
      <Box className="h-[100px] w-[100px]">
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
