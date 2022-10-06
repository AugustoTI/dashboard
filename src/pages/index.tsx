import { Button, Flex, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

interface HomeFormFields {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('Email é obrigatório').email('Preencha um Email válido'),
  password: yup.string().required('Senha é obrigatória'),
})

const Home: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<HomeFormFields>({
    resolver: yupResolver(signInFormSchema),
  })

  const onSubmit: SubmitHandler<HomeFormFields> = async dataFields => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(dataFields)
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        width="100%"
        maxW={400}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input
            type="email"
            label="E-Mail"
            error={errors.email}
            {...register('email')}
          />
          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register('password')}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          size="lg"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default Home
