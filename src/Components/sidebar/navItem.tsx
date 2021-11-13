
import { Flex, Text, Icon, Link, Menu, MenuButton, Heading, MenuList } from '@chakra-ui/react'

function NavHoverBox({ title, icon, description }: any) {
  return (
    <>
      <Flex
        pos='absolute'
        mt='calc(100px - 7.5px)'
        ml='-10px'
        width={0}
        height={0}
        borderTop='10px solid transparent'
        borderBottom='10px solid transparent'
        borderRight='10px solid #82AAAD'
      />
      <Flex
        h={200}
        w={200}
        // w='100%'
        flexDir='column'
        alignItems='center'
        justify='center'
        backgroundColor='#82AAAD'
        borderRadius='10px'
        color='#fff'
        // color='grey.50'
        textAlign='center'
      >
        <Icon as={icon} fontSize='3xl' mb={4} />
        <Heading size='md' fontWeight='normal'>{title}</Heading>
        <Text>{description}</Text>
      </Flex>
    </>
  )
}

export default function NavItem({ icon, title, description, active, navSize }: any) {
  return (
    <Flex
      mt={30}
      flexDir='column'
      w='100%'
      alignItems={navSize === 'small' ? 'center' : 'flex-start'}
    >
      <Menu placement='right'>
        <Link
          backgroundColor={active && '#AEC8CA'}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={(navSize !== 'large' ? '100%' : '')}
        >
          <MenuButton w='100%'>
            <Flex>
              <Icon as={icon} fontSize='xl' color={active ? '#82AAAD' : 'gray.500'} />
              <Text ml={5} display={navSize === 'small' ? 'none' : 'flex'} color='gray.500'>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          py={0}
          border='none'
          w={200}
          h={200}
          ml={5}
        >
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  )
}
