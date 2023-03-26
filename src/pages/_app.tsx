import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, MantineProvider } from '@mantine/core'
import { Layout } from '@/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
        fontFamily: 'JetBrains Mono, monospace'
      }}
    >
      <Box>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </MantineProvider>
  )
}
