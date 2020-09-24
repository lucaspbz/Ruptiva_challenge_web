import React, { useRef, InputHTMLAttributes, useEffect } from 'react'
import { useField } from '@unform/core'

import { Input as CustomInput } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, error, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <CustomInput ref={inputRef} defaultValue={defaultValue} {...rest} />
}

export default Input
