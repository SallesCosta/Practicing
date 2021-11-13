import { IoFingerPrint, IoFingerPrintOutline, IoFingerPrintSharp } from 'react-icons/io5'
import { DiReact } from 'react-icons/di'
import { MdCheckCircle, MdClose } from 'react-icons/md'
import { Divider, HStack, Icon } from '@chakra-ui/react'
import { RiReactjsLine } from 'react-icons/ri'
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai'
import { SiTypescript, SiStyledcomponents, SiJavascript } from 'react-icons/si'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ImWarning } from 'react-icons/im'
// import { SiChakraui } from 'react-icons/si'

const wh = '8'

export function AllStack() {
  return (
    <HStack spacing='10px' divider={<Divider orientation='vertical' />}>
      <Icon as={RiReactjsLine} w={wh} h={wh} color='GrayText' />
      <Icon as={SiTypescript} w={wh} h={wh} color='GrayText' />
      <Icon as={SiStyledcomponents} w={wh} h={wh} color='GrayText' />
      <Icon as={AiOutlineGithub} w={wh} h={wh} color='GrayText' />
      <Icon as={SiJavascript} w={wh} h={wh} color='GrayText' />
      <Icon as={IoFingerPrintOutline} w={wh} h={wh} color='GrayText' />
      <Icon as={IoFingerPrintSharp} w={wh} h={wh} color='GrayText' />
      <Icon as={IoFingerPrint} w={wh} h={wh} color='GrayText' />
      <Icon as={DiReact} w={wh} h={wh} color='GrayText' />
      <Icon as={MdClose} w={wh} h={wh} color='GrayText' />
      <Icon as={MoonIcon} w={wh} h={wh} color='GrayText' />
      <Icon as={SunIcon} w={wh} h={wh} color='GrayText' />
      {/* <Icon as={SiChakraui} w={wh} h={wh} color='GrayText' /> */}
    </HStack>
  )
}
export function StackCard() {
  return (
    <HStack spacing='10px'>
      <Icon as={SiJavascript} w={wh} h={wh} color='GrayText' />
      <Icon as={RiReactjsLine} w={wh} h={wh} color='GrayText' />
      <Icon as={SiTypescript} w={wh} h={wh} color='GrayText' />
      {/* <Icon as={SiChakraui} w={wh} h={wh} color='GrayText' /> */}
    </HStack>
  )
}

export function OkIcon() {
  return <Icon as={MdCheckCircle} color='green.500' w='12' h='12' />
}

export function ErrorIcon() {
  return <Icon as={AiOutlineClose} color='red.500' />
}
export function WarninIcon() {
  return <Icon as={ImWarning} color='yellow.500' />
}
