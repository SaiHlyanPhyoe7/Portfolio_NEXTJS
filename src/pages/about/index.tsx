import {
  Box,
  Text,
  Title,
  Tooltip,
  Affix,
  Transition,
  rem
} from '@mantine/core'
import Typewriter from 'typewriter-effect'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import img from '../../assets/img/rembg_photo.png'
import { useWindowScroll } from '@mantine/hooks'
import { IconArrowUp } from '@tabler/icons-react'

export default function Page() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box className="text-white h-full w-full text-center space-y-8 lg:space-y-28">
      <Box>
        <Parallax pages={4.2} className="">
          <ParallaxLayer offset={0} speed={0.5} className="">
            <Box className="">
              <Box className="flex flex-col px-8 w-full h-[80vh] space-y-8 items-center justify-center text-[25px] lg:text-4xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hi! I'm Sai Hlyan Phyoe...")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString('Oops..')
                      .deleteAll()
                      .typeString('But you can call me Ryan...')
                      .deleteAll()
                      .typeString('Welcome from about page..')
                      .start()
                  }}
                />
                <Title className="text-gray-600 text-[30px] text-center lg:text-start">
                  I am a Frontend Developer.
                </Title>
                <Text className="text-[15px] lg:text-[20px] text-gray-400 lg:w-[50%]">
                  An experienced website developer specializing in websites and
                  phone applications. Have done numerous projects involving
                  front and back end development.
                </Text>
              </Box>
            </Box>
          </ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 1, end: 4 }}
            style={{
              ...alignCenter,
              justifyContent: 'flex-start'
            }}
          >
            <div className={'bg-[#ff6d6d]'}>
              <Image
                src={img}
                alt="photo"
                className="hidden lg:block w-[40%] h-fit"
              />
            </div>
          </ParallaxLayer>
          <Image
            src={img}
            alt="photo"
            className="block lg:hidden mt-[700px] h-fit"
          />
          <ParallaxLayer
            offset={1.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div className="w-[95%] lg:w-[55%] text-start">
              <Box className="w-[100%] lg:w-[70%] space-y-12 text-start text-[15px] lg:text-md">
                <Text className="pt-40 lg:pt-0">
                  I have been doing Frontend Developer for last 2 years and I
                  specialize in helping companies and entrepreneurs writing
                  their company profile and business page.
                </Text>
                <Text>
                  In the last year along I help dozens of client in over 5
                  different industries. Containing Social Media, Ecommerce,
                  Banking, Company Profile, Food Industry,...
                </Text>
                {/* second s strength */}
                <Text>
                  My real strength is my ability to truly and quickly understand
                  the new tech.I pride myself on my reputation to creating,
                  designing and implementing what your company want to have.
                </Text>
                {/* third situation */}
                <Text>
                  What I&apos;m looking for is a company that i could add value
                  to, that i could produce a positive return on investment
                  for.Where I could join a strog team.
                </Text>
              </Box>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div className="w-[95%] lg:w-[55%] text-start">
              <Box className="w-[100%] lg:w-[70%] space-y-4 lg:space-y-12 text-start text-[15px] lg:text-md">
                {/* <Image
                  src={motivation}
                  className="h-fit block lg:hidden"
                  alt="motivation"
                /> */}
                <Text className="pt-52 lg:pt-0">
                  As you know My name is Ryan, Other than Programming ,I have a
                  diverse range of skills and quality that I believe a need for
                  developers.
                </Text>
                <Text>I am very positive.I love being at work.</Text>
                <Text>
                  I&apos;m happy working on my own but i also like to work as
                  part of a team.
                </Text>
                <Text>
                  I have goals outside of work which mean i need to perform to
                  high standard in my job in order to achieve those goals.
                </Text>
                <Text>So I am very focus on my work.</Text>
                <Text>I am very good at planning and organizing my work</Text>
              </Box>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            className=""
            offset={3.5}
            speed={1.5}
            style={{ ...alignCenter, justifyContent: 'flex-end' }}
          >
            <div className="w-[95%] lg:w-[55%] text-start">
              <Box className="w-[100%] lg:w-[70%] space-y-12 text-start text-[15px] lg:text-md">
                {/* <Image
                  src={engineering}
                  className="h-fit block lg:hidden"
                  alt="engineering"
                /> */}
                <Text className="pt-44 lg:pt-0">
                  I also coming from a circuit engineering background.
                </Text>
                <Text>
                  It has given me a strong foundation in problem-solving,
                  attention to detail, and logical thinking.
                </Text>
                <Text>
                  These skills are also crucial in web development, where I
                  believe I can leverage my ability to analyze and understand
                  complex systems, as well as my proficiency in programming
                  languages and technical tools.
                </Text>
                <Text>
                  I&apos;ve also completed a number of personal projects,
                  including building Socialmedia,CRM System,Ecommerce,Cryptoapp
                  that are responsive, good looking and performance.
                </Text>
                <Tooltip label="goto project page">
                  <Text className="my-12">
                    Goto Project Page to View All of my Projects
                  </Text>
                </Tooltip>
              </Box>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Box>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Box
              className="text-white rounded-full h-[100px]"
              style={transitionStyles}
              onClick={() => {
                scrollTo({ y: 0 })
              }}
            >
              <IconArrowUp
                size="3rem"
                className="bg-emerald-600 p-2 animate-bounce rounded-full"
              />
            </Box>
          )}
        </Transition>
      </Affix>
    </Box>
  )
}
