import React from 'react'
import { InputWrapper } from './styles'

const Input = ({ value, onChange, placeholder, label, textarea=false }) => (
  <InputWrapper>
    <label>
      <p>{label}</p>
      {!textarea ? (
         <input
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          className="input"
        />
      ) : (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={e => onChange(e.target.value)}
          className="input"
          rows={8}
        />
      )}
    </label>  
  </InputWrapper>
)

export default Input