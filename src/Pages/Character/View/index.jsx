import React from 'react'
import { Button, Loading } from '../../../components/reusable'
import { useAuth, useSingleCharacter } from '../../../custom-hooks'
import { CharacterDetails } from '../components'

const ViewCharacter = ({ id }) => {
    const [user] = useAuth()
    const [character, editCharacter] = useSingleCharacter(user, id)

    const [notes, setNotes] = React.useState()
    const [editMode, setEditMode] = React.useState(false)

    const saveDetailsChanges = (newDetails) => {
        editCharacter({ ...character, ...newDetails })
        setEditMode(false)
    }

    console.log('hewoinabiufsi')

    console.log(character)

    return (
        <Loading data={character}>
            <h2>View Character</h2>
            <CharacterDetails
                character={character}
                editMode={editMode}
                save={saveDetailsChanges}
            />
            <Button onClick={() => setEditMode(!editMode)}>Edit Character</Button>
        </Loading>
    )
}

export default ViewCharacter