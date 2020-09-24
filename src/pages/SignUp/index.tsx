import React from 'react'

import { Button, Container, Form, Input } from './styles'

const SignUp: React.FC = () => {
  return (
    <Container>
      <Form>
        <h3>Create your account</h3>

        <Input placeholder='Email' autoFocus inputMode='email' />

        <Input placeholder='Password' type='password' />

        <Input placeholder='Confirm password' type='password' />

        <Button type='submit'>SUBMIT</Button>
      </Form>
    </Container>
  )
}

export default SignUp
