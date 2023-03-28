import React from 'react'
import Lottie from 'lottie-react'
import animation from './404_Not_Found.json'

export const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-full">
      <div className="h-[300px] w-[300px]">
        <Lottie
          className="loading"
          animationData={animation}
          loop={true}
          autoPlay={true}
        />
      </div>
    </div>
  )
}
