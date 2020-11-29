import React, { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import { EditableFieldWrapper } from './style'

const EditableField = ({ onEdit, currentText, textarea, fieldKey }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [value, setValue] = useState(currentText)

  function saveChanges() {
    onEdit(fieldKey, value)
    setIsEditMode(false)
  }

  return (
    <EditableFieldWrapper>
      {isEditMode ? (
        <>
          <Input
            value={value}
            onChange={setValue}
            textarea={textarea}
          />
          <Button onClick={saveChanges}>Save</Button>
        </>
      ) : (
        <p>
          {value || 'No text provided'}
        </p>
      )}
      <Button onClick={() => setIsEditMode(!isEditMode)}>
        Toggle Edit
      </Button>
    </EditableFieldWrapper>
  )

}

export default EditableField