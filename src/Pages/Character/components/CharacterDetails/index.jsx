import React from 'react'
import { Column, FlexContainer, RightAlign } from '../../../../components/layout'
import { Button, Input } from '../../../../components/reusable'
import { CharacterDetailsWrapper } from './styles'

const CharacterDetails = (props) => {
    const {
        editMode,
        character,
        save
    } = props

    const [name, setName] = React.useState("")
    const [tags, setTags] = React.useState("")

    React.useEffect(() => {
        if (character) {
            setName(character.name)
        }
    })

    const saveDetails = () => {
        const splitTags = tags.split(',')

        save({
            name,
            tags: splitTags
        })
    }

    return (
        <CharacterDetailsWrapper>
            <FlexContainer>
                <Column>
                    <Input
                        label="Name"
                        onChange={setName}
                        value={name}
                        placeholder="What is your character's name?"
                        uneditable={!editMode}
                    />
                </Column>
            </FlexContainer>
            <FlexContainer>
                <Column>
                    <Input
                        label="Tags"
                        placeholder="A comma-separated list of tags you can use to search for your scene later"
                        onChange={setTags}
                        value={tags}
                        uneditable={!editMode}
                    />
                </Column>
            </FlexContainer>
            <br />
            <FlexContainer>
                <RightAlign>
                    <Button onClick={saveDetails}>Submit</Button>
                </RightAlign>
            </FlexContainer>
        </CharacterDetailsWrapper>
    )
}

export default CharacterDetails