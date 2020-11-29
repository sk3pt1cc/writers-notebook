import React from 'react'
import { useAuth, useScenes, useStories } from '../../../custom-hooks'
import {
  FlexContainer,
  Column,
  RightAlign
} from '../../../components/layout'
import {
  Input,
  Button,
  MultiselectDropdown
} from '../../../components/reusable'
import { SceneFormWrapper } from './styles'

const CreateScene = () => {
  const [user] = useAuth()
  const [_, createNewScene] = useScenes(user)
  const [stories] = useStories(user)

  const [title, setTitle] = React.useState("");
  const [setting, setSetting] = React.useState("");

  /**
   * The order will be a number. Users can update this and it should re-arrange the scenes in order, in real-time.
   */
  const [characters, setCharacters] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [tags, setTags] = React.useState("")

  function saveScene() {
    createNewScene({
      title,
      setting,
      characters,
      description,
    })
  }

  return (
    <SceneFormWrapper>
      <h2>Create a Scene</h2>
      <div>
        <FlexContainer>
          <Column>
            <Input
              label="Title"
              onChange={setTitle}
              value={title}
              placeholder="Title of scene"
            />
          </Column>
          <Column>
            <Input
              label="Setting"
              onChange={setSetting}
              value={setting}
              placeholder="Where this takes place"
            />
          </Column>
        </FlexContainer>
        <FlexContainer>
          <Column>
            <Input
              label="Characters"
              onChange={setCharacters}
              value={characters}
              placeholder="Characters involved"
              disabled
            />
          </Column>
        </FlexContainer>
        <FlexContainer>
          <Column>
            <Input
              label="Tags"
              onChange={setTags}
              value={tags}
              placeholder="Comma-separated list of tags"
              disabled
            />
          </Column>
        </FlexContainer>
        <FlexContainer>
          <Input
            label="Description"
            onChange={setDescription}
            value={description}
            textarea
            placeholder="What happens?"
          />
        </FlexContainer>
      </div>
      <FlexContainer>
        <RightAlign>
          <Button onClick={saveScene}>Submit</Button>
        </RightAlign>
      </FlexContainer>
    </SceneFormWrapper>
  );
}

export default CreateScene