import React from 'react'
import Lottie from 'lottie-react'
import animation from './backend.json'

export const BackendLottifile = () => {
  return (
    <div className="flex justify-center items-center">
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
