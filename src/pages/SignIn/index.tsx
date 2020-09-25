import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/Auth'
import { Container, Form, Button, Link } from './styles'
import Input from '../../components/Input'
import getValidationErrors from '../../utils/getValidationErrors'

interface ISignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const { signIn } = useAuth()
  const formRef = useRef<FormHandles>(null)

  const handleFormSubmit = useCallback(
    async (userData: ISignInFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Should be a valid email'),
          password: Yup.string().min(8, "Password should be at least 8 characters long")
        })

        await schema.validate(userData, { abortEarly: false })

        await signIn(userData)
      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
        }
        alert('Authentication error! Check your credentials')
      }
    },
    [signIn]
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
