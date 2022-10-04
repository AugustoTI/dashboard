import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'

const UserList: NextPage = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1400} mx="auto" my="6" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justifyContent="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo usuário
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr px="6" color="gray.800" width="8">
                <Th>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr px="6">
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">
                      JohnDoe@example.com
                    </Text>
                  </Box>
                </Td>
                <Td>18 de setembro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr px="6">
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">
                      JohnDoe@example.com
                    </Text>
                  </Box>
                </Td>
                <Td>18 de setembro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr px="6">
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">John Doe</Text>
                    <Text fontSize="sm" color="gray.300">
                      JohnDoe@example.com
                    </Text>
                  </Box>
                </Td>
                <Td>18 de setembro de 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList
