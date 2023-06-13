import React from 'react'
import Lottie from 'lottie-react'
import animation from './404_Not_Found.json'
import { Box } from '@mantine/core'

export const NotFound = () => {
  return (
    <Box className="flex justify-center items-center min-h-full">
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
