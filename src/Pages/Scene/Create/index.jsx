import React from 'react'
import { useAuth, useScenes } from '../../../custom-hooks'
import { SceneFormWrapper } from './styles'
import { navigate } from '@reach/router'
import SceneDetails from '../Components/SceneDetails'
import { Input } from '../../../components/reusable'

const CreateScene = () => {
  const [user] = useAuth()
  const [_, createNewScene] = useScenes(user)

  // This is simply for finding the scene with a search.
  const [tags, setTags] = React.useState("")

  async function saveScene(scene) {
    const id = await createNewScene(scene)
    navigate(`/scene/${id}`)
  }

  // Add a link to this article https://ashlyhilst.com/blog/2018/10/10/how-to-use-the-story-genius-scene-card

  return (
    <SceneFormWrapper>
      <h2>Create a Scene</h2>
      <SceneDetails
        save={saveScene}
        editMode
      />
    </SceneFormWrapper>
  );
}

export default CreateScene