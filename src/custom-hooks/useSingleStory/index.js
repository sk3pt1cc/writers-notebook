import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'

const useSingleStory = (user, id) => {
    const storyRef = firestore.collection('stories')
    const query = storyRef.where('owner', '==', user.uid).where('id', '==', id)

    const [story] = useCollectionData(query, { idField: 'firebaseId' })

    const editStory = (newStory) => {
        storyRef.doc(newStory.firebaseId).set(newStory)
    }

    // Builds a list of firebase actions to be carried out simultaneously.
    const persistScenes = async (newScenes) => {
        let batch = firestore.batch()
        let storyToEdit = {...story[0]}

        if (!story.scenes) {
            storyToEdit.scenes = []
        }

        batch.set(storyRef.doc
          (storyToEdit.firebaseId),
          {...storyToEdit, scenes: [...storyToEdit.scenes, ...newScenes.map(newScene => newScene.id)]}
        )

        // CURRENTLY THE PARENT IS NOT REMOVED FROM THE SCENES THAT GET DELETED SO FIX THIS

        newScenes.forEach(scene => {
            batch.set(
                firestore.collection('scenes').doc(scene.firebaseId),
                { ...scene, parent: storyToEdit.id }
            )
        })

        await batch.commit()
    }

    if (!story) {
        return [null, null]
    }

    return [story[0], editStory, persistScenes]
}

export default useSingleStory