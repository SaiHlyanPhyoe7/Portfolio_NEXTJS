import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import { Box, Text } from '@mantine/core'
import Image from 'next/image'
import img from '../../../assets/img/rembg_photo.png'

interface ParallaxProps {
  children: React.ReactNode
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <Box className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </Box>
  )
}

export default function Velocity() {
  return (
    <section className="lg:my-48">
      <ParallaxText baseVelocity={-3}>
        <Text className="leading-[0.8] text-[40px] hover:text-emerald-400 lg:text-[5.5rem] font-light text-white tracking-tighter font-plaster">
          Dream is not the thing that you see in sleep.
        </Text>
      </ParallaxText>
      <ParallaxText baseVelocity={3}>
        <Text className="leading-[0.8] text-[40px] hover:text-emerald-400 lg:text-[5.5rem] font-light text-white tracking-tighter font-plaster">
          But it is the thing that doesn&apos;t let you sleep.
        </Text>
      </ParallaxText>
      <Image
        className="w-[450px] h-[500px] my-auto mx-auto hidden lg:block"
        src={img}
        alt="shp photo"
      />
      <ParallaxText baseVelocity={-3}>
        <Text className="leading-[0.8] text-[40px] hover:text-emerald-400 lg:text-[6rem] font-light text-white tracking-tighter font-plaster">
          Dream is not the thing that you see in sleep.
        </Text>
      </ParallaxText>
      <ParallaxText baseVelocity={3}>
        <Text className="leading-[0.8] text-[40px] hover:text-emerald-400 lg:text-[5.5rem] font-light text-white tracking-tighter font-plaster">
          But it is the thing that doesn&apos;t let you sleep.
        </Text>
      </ParallaxText>
    </section>
  )
}
