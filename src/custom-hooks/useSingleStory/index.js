import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'

const useSingleStory = (user, id) => {
    const storyRef = firestore.collection('stories')
    const query = storyRef.where('owner', '==', user.uid).where('id', '==', id)

    const [story] = useCollectionData(query, { idField: 'firebaseId' })

    const editStory = (newStory) => {
        storyRef.doc(newStory.firebaseId).set(newStory)
    }

    if (!story) {
        return [null, null]
    }

    return [story[0], editStory]
}

export default useSingleStory