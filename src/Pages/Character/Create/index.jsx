import { navigate } from '@reach/router'
import React from 'react'
import { useAuth, useCharacters } from '../../../custom-hooks'
import { CharacterDetails } from '../components'
import { CreateCharacterWrapper } from './style'

const CreateCharacter = () => {
    const [user] = useAuth()
    const [_, createNewCharacter] = useCharacters(user)

    const saveCharacter = async (character) => {
        const id = await createNewCharacter(character)
        navigate(`/character/${id}`)
    }

    return (
        <CreateCharacterWrapper>
            <h2>Create a Character</h2>
            <CharacterDetails
                save={saveCharacter}
                editMode
            />
        </CreateCharacterWrapper>
    )
}

export default CreateCharacter
