import React from 'react'
import { useAuth, useScenes } from '../../../custom-hooks'
import { CreateSceneWrapper } from './styles'
import { navigate } from '@reach/router'
import SceneDetails from '../Components/SceneDetails'

const CreateScene = () => {
  const [user] = useAuth()
  const [_, createNewScene] = useScenes(user)

  // This is simply for finding the scene with a search.
  const [tags, setTags] = React.useState("")

  const saveScene = async (scene) => {
    const id = await createNewScene(scene)
    navigate(`/scene/${id}`)
  }

  // Add a link to this article https://ashlyhilst.com/blog/2018/10/10/how-to-use-the-story-genius-scene-card

  return (
    <CreateSceneWrapper>
      <h2>Create a Scene</h2>
      <SceneDetails
        save={saveScene}
        editMode
      />
    </CreateSceneWrapper>
  );
}

export default CreateScene