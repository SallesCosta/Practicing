import { Flex, Text, IconButton, Divider, Avatar, Heading } from '@chakra-ui/react'
import { FiMenu, FiHome, FiCalendar, FiUser, FiDollarSign, FiBriefcase, FiSettings } from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import { useState } from 'react'
import NavItem from './navItem'

export function Sidebar() {
  const [navSize, changeNavSize] = useState('large')
  return (
    <Flex
      pos='sticky'
      l='2'
      h='85vh'
      mt='2'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      flexDir='column'
      justifyContent='space-between'
      bgColor='white'
    >
      <Flex
        p='5%'
        as='nav'
        w='100%'
        flexDir='column'
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
      >
        <IconButton
          background='none'
          mt={5}
          aria-label=''
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') { changeNavSize('large') } else { changeNavSize('small') }
          }}
        />
        <NavItem navSize={navSize} icon={FiHome} title='Dashboard' description='This is the description for the dashboard.' />
        <NavItem navSize={navSize} icon={FiCalendar} title='Calendar' />
        <NavItem navSize={navSize} icon={FiUser} title='Clients' />
        <NavItem navSize={navSize} icon={IoPawOutline} title='Animals' />
        <NavItem navSize={navSize} icon={FiDollarSign} title='Stocks' active />
        <NavItem navSize={navSize} icon={FiBriefcase} title='Reports' />
        <NavItem navSize={navSize} icon={FiSettings} title='Settings' />
      </Flex>

      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='avatar-1.jpg' />
          <Flex flexDir='column' ml={4} display={navSize === 'small' ? 'none' : 'flex'}>
            <Heading as='h3' size='sm'>Eduardo Salles</Heading>
            <Text color='gray'>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
