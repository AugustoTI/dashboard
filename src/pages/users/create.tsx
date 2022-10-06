import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'

interface CreateUserFormFields {
  name: string
  email: string
  password: string
  password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Preencha um Email válido'),
  password: yup.string().required('Senha é obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

const CreateUser: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormFields>({
    resolver: yupResolver(createUserFormSchema),
  })

  const onSubmit: SubmitHandler<CreateUserFormFields> = async dataFields => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(dataFields)
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1400} mx="auto" my="6" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar Usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="5" w="100%">
              <Input label="Nome completo" {...register('name')} error={errors.name} />
              <Input
                label="E-Mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="5" w="100%">
              <Input
                type="password"
                label="Senha"
                {...register('password')}
                error={errors.password}
              />
              <Input
                type="password"
                label="Confirmar senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser
