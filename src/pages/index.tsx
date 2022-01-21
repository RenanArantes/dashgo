import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '../components/Form/Input'
import Logo from '../components/Header/Logo'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

type SignInFormData  = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('O e-mail precisa ser válido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { signIn } = useContext(AuthContext)

  console.log(formState.errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    await signIn(values)

  }

  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Flex  mb="45" alignItems="center" justifyContent="center">
        <Logo />
      </Flex>
      <Flex
        as="form"
        w={["80%", "100%"]}
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            label="E-mail"
            type="email"
            error={formState.errors.email}
            {...register('email')} 
          />
          
          <Input
            name="password"
            label="Senha"
            type="password"
            error={formState.errors.password}
            {...register('password')} 
          />
        </Stack>
        <Button
          type="submit"
          marginTop="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        > Entrar </Button>
      </Flex>
    </Flex>
  )
}
