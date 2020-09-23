import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  background-color: #fff;
  padding: 24px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  border-radius: 4px;

  h3 {
    margin: 16px auto;
  }

  span {
    font-size: 12px;
  }
`

export const Input = styled.input`
  padding: 8px;
  margin: 8px auto;
  border: 1px solid #1f99ea;
  border-radius: 4px;
  width: 340px;
`

export const Button = styled.button`
  background-color: #1f99ea;
  width: 90%;
  height: 48px;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-weight: 500;
  margin: 32px auto;
`
