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
import { notifications } from '@mantine/notifications'
import { IconCircleCheck, IconExclamationCircle } from '@tabler/icons-react'
import z from 'zod'

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty()
})

const useStyles = createStyles(() => ({
  input: {
    color: 'white'
  }
}))

export default function Page() {
  const { classes } = useStyles()
  const form = useRef<HTMLFormElement>(null)

  // const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   if (form.current != null) {
  //     emailjs
  //       .sendForm(
  //         'gmail',
  //         'template_ggpr65t',
  //         form.current,
  //         'nhhTn313DgeNZcJJJ'
  //       )
  //       .then(
  //         (result) => {
  //           console.log(result.text)
  //           form?.current?.reset()
  //           notifications.show({
  //             id: 'hello-there',
  //             withCloseButton: true,
  //             autoClose: 3000,
  //             title: 'Success',
  //             message: 'The email has been send!',
  //             color: 'green',
  //             icon: <IconCircleCheck color="green" />,
  //             className: 'my-notification-class',
  //             style: { backgroundColor: 'green' },
  //             sx: { backgroundColor: 'green' },
  //             loading: false
  //           })
  //         },
  //         (error) => {
  //           console.log(error.text)
  //         }
  //       )
  //   }
  // }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.current)

    if (form.current != null) {
      const formData = new FormData(form.current)
      const formValues = Object.fromEntries(formData.entries())
      const validationResult = formSchema.safeParse(formValues)

      if (!validationResult.success) {
        const errorMessages = validationResult.error.issues.map(
          (issue) => issue.message
        )
        notifications.show({
          id: 'Error',
          withCloseButton: true,
          color: 'fb5607',
          autoClose: 3000,
          title: 'All fields are requireds',
          message: errorMessages.join(', '),
          icon: <IconExclamationCircle />,
          className: 'my-notification-class',
          style: { backgroundColor: 'fb5607' },
          sx: { backgroundColor: 'fb5607' },
          loading: false
        })
        return
      }

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
            form?.current?.reset()
            notifications.show({
              id: 'hello-there',
              withCloseButton: true,
              autoClose: 3000,
              title: 'Success',
              message: 'The email has been sent!',
              color: 'green',
              icon: <IconCircleCheck color="green" />,
              className: 'my-notification-class',
              style: { backgroundColor: 'fb5607' },
              sx: { backgroundColor: 'fb5607' },
              loading: false
            })
          },
          (error) => {
            console.log(error.text)
          }
        )
    }
  }

  return (
    <Box className="text-white h-[80vh] w-full text-center space-y-8 xl:space-y-28 px-2 xl:px-8">
      <Flex
        justify="center"
        align="center"
        className="m-auto bg-[#1d1e30] border-emerald-400 border-none xl:border-4 rounded-3xl"
      >
        <Box className="grid grid-cols-12 w-full">
          <Box className="col-span-12 xl:col-span-6 text-start my-16 mx-6 xl:mx-32">
            <Stack className="xl:gap-16">
              <Box>
                <Text className="text-[30px] font-bold text-white my-3">
                  Contact Me Via
                </Text>
                <Text className="text-[15px] font-bold text-gray-400 xl:w-[60%]">
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
                      <Link target="_blank" href={info.link}>
                        {info.icon}
                      </Link>
                    </Tooltip>
                  )
                })}
              </Flex>
            </Stack>
          </Box>
          <Box className="col-span-12 xl:col-span-6 text-start my-16 mx:12 xl:mx-32 rounded-3xl px-16 py-12 bg-white">
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
                  placeholder="Your Email"
                  label="Your Email"
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
