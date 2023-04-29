/* eslint-disable multiline-ternary */
import { StarGenerateCompo } from '@/components/commom/StarGenerate.Compo'
import { projectCard } from '@/constants/ProjectConstants/ProjectConstants'
import {
  Badge,
  Box,
  Flex,
  Title,
  Affix,
  Button,
  Text,
  Transition,
  rem
} from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowUp } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'

export default function Page() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box className="text-white static h-full lg:mx-48 pb-12">
      <Title order={1} my="50px">
        My Projects
      </Title>
      <Box className="grid grid-cols-12 lg:gap-x-12 px-4 lg:px-0 gap-y-10">
        {projectCard.map((data) => {
          return (
            <Box
              key={data.id}
              className="col-span-12 lg:col-span-6 2xl:col-span-4 p-12 flex flex-col space-y-8 border border-emerald-400 rounded-tl-[20px] rounded-tr-[90px] rounded-br-[15px] rounded-bl-[50px]"
            >
              <Box className="space-y-6">
                <Image
                  className="lg:w-fit rounded rounded-tr-[40px] static h-fit"
                  src={data.img}
                  alt="photo"
                />
                <Flex justify="space-between" align="center">
                  <Flex justify="start" align="center" gap="md">
                    <Text className="text-gray-400">Review : </Text>
                    <StarGenerateCompo rating={data.rating} />
                  </Flex>
                </Flex>
              </Box>

              <Box className="space-y-4">
                <Box className="space-y-4">
                  <Text className="font-bold text-lg">{data.title}</Text>
                  <Text className="text-gray-400 text-sm">{data.para}</Text>
                </Box>
                <Box className="py-4">
                  <Text fz="sm" py="xs">
                    Tech Stack use this project :{' '}
                  </Text>
                  <Box>
                    {data.techStack.map((tech) => (
                      <Box component="span" key={tech} className="px-1">
                        <Badge className="text-emerald-400">{tech}</Badge>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Flex justify="space-between" align="center">
                  <Text className="text-sm lg:text-lg">
                    Price: {data.price}
                  </Text>
                  <Link
                    target="_blank"
                    href={data.link}
                    className="text-sm lg:text text-indigo-400 underline underline-offset-4"
                  >
                    View this Project
                  </Link>
                </Flex>
              </Box>
            </Box>
          )
        })}
      </Box>
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
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
            </Button>
          )}
        </Transition>
      </Affix>
    </Box>
  )
}
