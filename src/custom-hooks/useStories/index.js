import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'

const useStories = (user) => {
    const storiesRef = firestore.collection(`stories`)
    const query = storiesRef.where('owner', '==', user.uid)

    const [stories] = useCollectionData(query, { idField: 'id' })

    const saveNewStory = async (story) => {
        await storiesRef.add({
            ...story,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            owner: user.uid,
        })
    }

    return [stories, saveNewStory]
}

export default useStories