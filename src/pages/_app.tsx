import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, MantineProvider } from '@mantine/core'
import { Layout } from '@/layout/Layout'
import * as React from 'react'
import { Notifications } from '@mantine/notifications'
import useMeasure from 'react-use-measure'
import { useTrail, animated } from '@react-spring/web'

import styles from './styles.module.css'
import dynamic from 'next/dynamic'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x: number, y: number) =>
  `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`

const AnimatedCursor = dynamic(
  async () => await import('react-animated-cursor'),
  {
    ssr: false
  }
)

export default function App({ Component, pageProps }: AppProps) {
  const [trail, api] = useTrail(3, (i) => ({
    xy: [0, 0],
    config: i === 0 ? fast : slow
  }))
  const [ref, { left, top }] = useMeasure()

  const handleMouseMove = (e: any) => {
    api.start({ xy: [e.clientX - left, e.clientY - top] })
  }

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
        fontFamily: 'JetBrains Mono, monospace',
        colors: {
          // override dark colors to change them for all components
          dark: [
            '#252422',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1d1e30',
            '#0c0d21',
            '#01010a'
          ]
        }
      }}
    >
      <Notifications position="bottom-right" />
      <div className={styles.container}>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div
          ref={ref}
          className={styles.hooksMain}
          onMouseMove={handleMouseMove}
        >
          {trail.map((props, index) => (
            <animated.div
              key={index}
              style={{ transform: props.xy.to(trans) }}
            />
          ))}
        </div>
      </div>
      <Box>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="253, 186, 116"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </MantineProvider>
  )
}
