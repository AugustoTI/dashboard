import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { SearchBox } from './SearchBox'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1400}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      alignItems="center"
    >
      <Logo />
      <SearchBox />
      <Flex ml="auto" alignItems="center">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
