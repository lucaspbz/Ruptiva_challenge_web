import React from 'react'

import { Container, Form, Input, Button } from './styles'

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <h3>Log in to your account</h3>

        <Input placeholder='Email' />

        <Input placeholder='Password' />

        <Button type='submit'>LOGIN</Button>

        <span>Don't have a account? Sign up</span>
      </Form>
    </Container>
  )
}

export default Login
