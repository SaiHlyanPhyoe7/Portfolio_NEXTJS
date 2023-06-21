import Image from 'next/image'
import React, { useState } from 'react'
import img from '../../assets/img/my_photo.jpg'
import { Box } from '@mantine/core'

function TextHoverImg({ children }: { children: React.ReactNode }) {
  const [showImage, setShowImage] = useState(false)
  const [imagePosition, setImagePosition] = useState({ top: 0, left: 0 })

  const handleMouseEnter = () => {
    // console.log('mouse is entering')
    setShowImage(true)
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // console.log('mouse is moving')
    setImagePosition({
      top: event.clientY - 100,
      left: event.clientX - 100
    })
  }

  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement | null
    if (
      relatedTarget != null &&
      relatedTarget.closest('.text-hover-img') == null
    ) {
      setShowImage(false)
    }
  }

  return (
    <Box>
      <Box
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
      >
        {children}
      </Box>

      {showImage && (
        <Image
          className="hidden lg:block absolute w-[200px] h-[200px] rounded-md"
          src={img}
          alt="Hover Image"
          style={{ top: imagePosition.top, left: imagePosition.left }}
        />
      )}
    </Box>
  )
}

export default TextHoverImg
