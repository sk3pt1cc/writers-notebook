import React, { useState } from 'react'
import * as uuid from 'uuid'
import { Column, FlexContainer } from '../../../components/layout'
import { Button, Input, Loading, EditableField, Note } from '../../../components/reusable'
import { useAuth, useSingleScene } from '../../../custom-hooks'

const ViewScene = ({ id }) => {
  const [user] = useAuth()
  const [scene, editScene] = useSingleScene(user, id)
  const [notes, setNotes] = useState([])
  const [newNoteText, setNewNoteText] = useState('')
  const [isAddingNote, setIsAddingNote] = useState(false)

  React.useEffect(() => {
    if (scene && scene.notes) {
      setNotes(scene.notes)
    }
  }, [scene])

  function addNote() {
    editScene({ ...scene, notes: [...notes, { text: newNoteText, id: uuid.v4() }] })
    setNewNoteText('')
  }

  function deleteNote(id) {
    const newNotes = notes.filter(note => note.id !== id)
    editScene({ ...scene, notes: [...newNotes] })
  }

  function persistFieldChanges(key, value) {
    const changedScene = {...scene, [key]: value}
    editScene(changedScene)
  }

  return (
    <Loading data={scene}>
      {scene && (
        <>
          <h2>{scene.title}</h2>
          <hr />
          <FlexContainer>
            <Column>
              <h3>Setting</h3>
              <EditableField
                currentText={scene.setting}
                onEdit={persistFieldChanges}
                fieldKey="setting"
              />
            </Column>
          </FlexContainer>
          <h3>Description</h3>
          <EditableField
            currentText={scene.description}
            onEdit={persistFieldChanges}
            fieldKey="description"
          />
          <hr />
          <h3>Notes</h3>
          <Button onClick={() => setIsAddingNote(!isAddingNote)}>Add Note</Button>
          {isAddingNote && (
            <div>
              <Input
                label="New Note Text"
                onChange={setNewNoteText}
                value={newNoteText}
                textarea
                placeholder="Add new note text"
              />
              <Button onClick={addNote}>Save</Button>
            </div>
          )}
          {notes.map(note => <Note key={note.id} {...note} onClick={deleteNote} />)}
        </>
      )}
    </Loading>
  )
}

export default ViewScene