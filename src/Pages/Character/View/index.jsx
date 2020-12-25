import React from 'react'
import { Button, Loading, SelectionCarousel } from '../../../components/reusable'
import { useAuth, useScenes, useSingleCharacter } from '../../../custom-hooks'
import { CharacterDetails } from '../components'

const ViewCharacter = ({ id }) => {
    const [user] = useAuth()
    const [character, editCharacter] = useSingleCharacter(user, id)
    const [scenes] = useScenes(user)
    const [editMode, setEditMode] = React.useState(false)

    const saveDetailsChanges = (newDetails) => {
        editCharacter({ ...character, ...newDetails })
        setEditMode(false)
    }

    const saveScenes = (scenes) => {
        editCharacter({ ...character, scenes })
    }

    console.log('charararacter', character);

    return (
        <Loading data={character}>
            <h2>View Character</h2>
            <CharacterDetails
                character={character}
                editMode={editMode}
                save={saveDetailsChanges}
            />
            <Button onClick={() => setEditMode(!editMode)}>Edit Character Details</Button>
            <hr />
            <SelectionCarousel entities={scenes} saveSelection={saveScenes} titleKey="alphaPoint" />
        </Loading>
    )
}

export default ViewCharacter