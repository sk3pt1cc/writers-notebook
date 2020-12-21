import React, { useState } from 'react'
import { Loading, MultiselectDropdown } from '../../../components/reusable'
import { useAuth, useScenes, useSingleStory } from '../../../custom-hooks'
import scene from '../../../service/scene'

const ViewStory = ({ id }) => {
    const [user] = useAuth()
    const [story, _] = useSingleStory(user, id)
    const [scenes] = useScenes(user)
    const [storyScenes, setStoryScenes] = useState([])

    const originalScenes = story ? story.scenes : [];

    React.useEffect(() => {
        if (story && story.scenes) {
            const filteredStoryScenes =  scenes.filter(
                scene => story.scenes.includes(scene.id)
            ).map(scene => ({
                value: scene.id,
                label: scene.title
            }));

            setStoryScenes(filteredStoryScenes)
        }
    }, [story, scenes])
 
    const persistScenesToStory = () => {
        
    }

    const getSceneData = () => {
        return storyScenes.map(storyScene => scenes.find(scene => storyScene.value === scene.id))
    }

    const getSceneDropdownOptions = () => {
        return scenes.
          filter(scene => !storyScenes.includes(scene.id))
          .map(scene => ({
              value: scene.id,
              label: scene.title
          }))
    }

    return (
        <Loading data={story}>
            <p>{story && story.name}</p>
            <hr />
            <div>
              <h2>Scenes</h2>
              <div>
                  {getSceneData().map(scene => (
                      <p>{scene.title}</p>
                  ))}
              </div>
              <hr />
              <div>
                  <h2>Add Scenes</h2>
                  <MultiselectDropdown
                    options={getSceneDropdownOptions()}
                    onSelect={setStoryScenes}
                    selected={storyScenes}
                  />
                  <button onClick={persistScenesToStory}>Submit</button>
              </div>
            </div>
        </Loading>
    )
}

export default ViewStory