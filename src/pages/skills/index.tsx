import { IconArrowUp } from '@tabler/icons-react'
import { skills } from '../../constants/SkillConstants/SkillConstants'
import {
  Affix,
  Box,
  Button,
  Center,
  Flex,
  RingProgress,
  Text,
  ThemeIcon,
  Title,
  Transition,
  rem
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

export default function Page() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Box className="text-white h-fit pb-20 w-full text-center px-2 lg:px-8">
      <Title order={1} className="my-14 underline underline-offset-4">
        Some of My Skills Include
      </Title>
      <Box className="grid grid-cols-12 lg:gap-x-16 gap-y-12 lg:gap-y-24">
        {skills.map((skill) => {
          return (
            <Box
              key={skill.id}
              className="col-span-6 md:col-span-3 lg:col-span-2 my-auto"
            >
              <Flex justify="center" gap={12} align="center" className="">
                <RingProgress
                  sections={[{ value: skill.value, color: 'teal' }]}
                  label={
                    <Center>
                      <ThemeIcon
                        color="teal"
                        variant="outline"
                        radius="xl"
                        size="xl"
                        className="mx-auto"
                      >
                        {skill.icon}
                      </ThemeIcon>
                    </Center>
                  }
                />
              </Flex>
              <Text>{skill.name}</Text>
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
