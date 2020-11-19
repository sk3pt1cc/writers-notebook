import React from 'react'
import { ButtonWrapper } from './styles'

const Button = ({ children, onClick, type="basic" }) => (
  <ButtonWrapper type={type}>
    <button onClick={onClick}>
      {children}
    </button>
  </ButtonWrapper>
)

export default Button