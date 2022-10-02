import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Dashboard: NextPage = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW={1400} mx="auto" my="6" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  )
}

export default Dashboard
