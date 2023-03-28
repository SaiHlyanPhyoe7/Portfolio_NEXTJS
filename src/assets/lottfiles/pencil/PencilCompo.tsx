import React from 'react'
import Lottie from 'lottie-react'
import animation from './pencil_drawing.json'

export const PencilCompo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="h-[100px] w-[100px]">
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
