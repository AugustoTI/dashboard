import {
  FormControl,
  FormLabel,
  InputProps as ChakraInputProps,
  Input as ChakraInput,
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input = ({ label, name, ...rest }: InputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        size="lg"
        _hover={{
          bgColor: 'gray.900',
        }}
        {...rest}
      />
    </FormControl>
  )
}
