import React, { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import Input from '../../components/Input'

import { useAuth } from '../../hooks/Auth'
import getValidationErrors from '../../utils/getValidationErrors'
import { Button, Container, Form } from './styles'
import api from '../../services/api'

interface ISignUpFormData {
  email: string
  password: string
  confirmPassword: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()

  const handleSubmit = useCallback(
    async (userData: ISignUpFormData) => {
      try {
        formRef.current?.setErrors({})
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Should be a valid email'),
          password: Yup.string().min(8, "Password should be at least 8 characters long"),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        })

        await schema.validate(userData, { abortEarly: false })

        await api.post('/users', { email: userData.email, password: userData.password })

        alert('Account created!')

        signIn({ email: userData.email, password: userData.password })

      } catch (err) {

        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)
          formRef.current?.setErrors(errors)
          alert('Error creating account! Check your credentials.')

        } else {
          alert(err.response.data.message)
        }
      }
    },
    [signIn]
  )

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h3>Create your account</h3>

        <Input placeholder='Email' autoFocus name='email' inputMode='email' />

        <Input placeholder='Password' name='password' type='password' />

        <Input placeholder='Confirm password' name='confirmPassword' type='password' />

        <Button type='submit'>SUBMIT</Button>
      </Form>
    </Container>
  )
}

export default SignUp
