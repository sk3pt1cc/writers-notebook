import React from 'react'
import Button from '../Button'
import { NoteContainer } from './styles'

const Note = ({ onClick, text, id }) => (
  <NoteContainer>
    <div>
      {text}
    </div>
    <Button onClick={() => onClick(id)}>Delete Note</Button>
  </NoteContainer>
)

export default Note
