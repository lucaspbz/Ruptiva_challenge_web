import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { useHistory } from 'react-router-dom'

import { useAuth } from '../../hooks/Auth'
import { Container, Form, Button, Link } from './styles'
import Input from '../../components/Input'

interface ISignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth()
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()

  const handleFormSubmit = useCallback(
    async ({ email, password }: ISignInFormData) => {
      try {
        await signIn({ email, password })
      } catch (err) {
        alert(err.message)
      }
    },
    []
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h3>Log in to your account</h3>

        <Input name='email' autoFocus inputMode='email' />

        <Input name='password' type='password' />

        <Button type='submit'>LOGIN</Button>

        <span>
          Don't have a account?
          <Link to='/signup'> Sign up</Link>
        </span>
      </Form>
    </Container>
  )
}

export default SignIn
