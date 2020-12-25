import React from 'react'
import { Button, Loading, SelectionCarousel } from '../../../components/reusable'
import SceneCarousel from '../../../components/reusable/SceneCarousel'
import { useAuth, useScenes, useSingleCharacter } from '../../../custom-hooks'
import { CharacterDetails } from '../components'

const ViewCharacter = ({ id }) => {
    const [user] = useAuth()
    const [character, editCharacter] = useSingleCharacter(user, id)
    const [scenes] = useScenes(user)
    const [editMode, setEditMode] = React.useState(false)
    const [characterScenes, setCharacterScenes] = React.useState([])

    React.useEffect(() => {
        if (character && scenes) {
            setCharacterScenes(
                character.scenes.map(characterScene => scenes.find(scene => characterScene.id === scene.id))
            )
        }
    }, [character])

    const saveDetailsChanges = (newDetails) => {
        editCharacter({ ...character, ...newDetails })
        setEditMode(false)
    }

    const saveScenes = (scenes) => {
        editCharacter({ ...character, scenes })
    }

    return (
        <Loading data={character}>
            <h2>View Character</h2>
            <CharacterDetails
                character={character}
                editMode={editMode}
                save={saveDetailsChanges}
            />
            <Button onClick={() => setEditMode(!editMode)}>Edit Character</Button>
            <hr />
            {editMode ? (
                <>
                    <h3>Add or Remove Scenes</h3>
                    <SelectionCarousel entities={scenes} saveSelection={saveScenes} titleKey="alphaPoint" preSelected={character ? character.scenes : []} />
                </>
            ) : (
                <SceneCarousel scenes={characterScenes} />
            )}
        </Loading>
    )
}

export default ViewCharacter