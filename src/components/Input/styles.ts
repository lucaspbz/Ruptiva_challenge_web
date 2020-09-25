import styled, { css } from 'styled-components'

interface IInputProps {
  isErrored: boolean
}

export const Input = styled.input<IInputProps>`
  padding: 8px;
  margin: 8px auto;
  border: 1px solid #1f99ea;
  border-radius: 4px;
  width: 340px;

  ${(props) =>
    props.isErrored &&
    css`
    border-color: #DB222A
    `
  }
`
