import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxW={400}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">E-Mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900',
              }}
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" size="lg" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
