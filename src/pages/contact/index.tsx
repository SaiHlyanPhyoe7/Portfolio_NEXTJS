import {
  contactInfo,
  socialContactInfoLogo
} from '@/constants/ContactConstants/conntactConstants'
import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  Textarea,
  Tooltip,
  createStyles
} from '@mantine/core'

import Link from 'next/link'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const useStyles = createStyles(() => ({
  input: {
    color: 'white'
  }
}))

export default function Page() {
  const { classes } = useStyles()
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.current)

    if (form.current != null) {
      emailjs
        .sendForm(
          'gmail',
          'template_ggpr65t',
          form.current,
          'nhhTn313DgeNZcJJJ'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }
  return (
    <Box className="text-white h-screen w-full text-center space-y-8 lg:space-y-28 px-8">
      <Flex
        justify="center"
        align="center"
        className="h-[80vh] m-auto mt-8 bg-[#1d1e30] border-emerald-400 border-4 rounded-3xl"
      >
        <Box className="grid grid-cols-12 w-full h-full">
          <Box className="col-span-6 text-start my-16 mx-32">
            <Stack className="gap-16">
              <Box>
                <Text className="text-[30px] font-bold text-white my-3">
                  Contact Me Via
                </Text>
                <Text className="text-[15px] font-bold text-gray-400 w-[60%]">
                  Fill up the form and I will get back to you within 24 hours.
                </Text>
              </Box>
              <Stack className="gap-8">
                {contactInfo.map((info) => {
                  return (
                    <Flex
                      key={info.desc}
                      justify="start"
                      gap="xl"
                      align="center"
                    >
                      {info.icon}
                      <Text>{info.desc}</Text>
                    </Flex>
                  )
                })}
              </Stack>
              <Flex justify="start" gap="xl" align="center">
                {socialContactInfoLogo.map((info) => {
                  return (
                    <Tooltip key={info.link} label={info.link}>
                      <Link href={info.link}>{info.icon}</Link>
                    </Tooltip>
                  )
                })}
              </Flex>
            </Stack>
          </Box>
          <Box className="col-span-6 text-start my-16 mx-32 rounded-3xl px-16 py-12 bg-white">
            <form ref={form} onSubmit={sendEmail}>
              <Stack className="gap-6">
                <TextInput
                  classNames={{
                    input: classes.input
                  }}
                  radius="md"
                  placeholder="Your name"
                  label="Full name"
                  name="name"
                />
                <TextInput
                  type="email"
                  classNames={{
                    input: classes.input
                  }}
                  radius="md"
                  placeholder="Mail"
                  label="Mail"
                  name="email"
                />
                <Textarea
                  classNames={{
                    input: classes.input
                  }}
                  placeholder="Message"
                  label="Message"
                  radius="lg"
                  size="lg"
                  minRows={5}
                  name="message"
                />
                <Flex justify="end" mt="80px" w="full">
                  <Button
                    type="submit"
                    className="bg-[#2B2C3D]"
                    radius="md"
                    h="50px"
                    w="50%"
                  >
                    Submit
                  </Button>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
