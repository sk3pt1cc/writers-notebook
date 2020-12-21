import React, { useState } from 'react'
import * as uuid from 'uuid'
import { Button, Loading, Note } from '../../../components/reusable'
import { useAuth, useSingleScene } from '../../../custom-hooks'
import SceneDetails from '../Components/SceneDetails'

const ViewScene = ({ id }) => {
  const [user] = useAuth()
  const [scene, editScene] = useSingleScene(user, id)
  const [notes, setNotes] = useState([])
  const [newNoteText, setNewNoteText] = useState('')
  const [isAddingNote, setIsAddingNote] = useState(false)
  const [editMode, setEditMode] = useState(false)

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

  const saveDetailsChanges = (newDetails) => {
    editScene({ ...scene, ...newDetails })
    setEditMode(false)
  }

  return (
    <Loading data={scene}>
      <h2>View Scene</h2>
      <SceneDetails
        scene={scene}
        editMode={editMode}
        save={saveDetailsChanges}
      />
      <Button onClick={() => setEditMode(!editMode)}>Edit Scene</Button>
      {/** Do this later */}
      <h2>Notes</h2>
    </Loading>
  )
}

export default ViewScene