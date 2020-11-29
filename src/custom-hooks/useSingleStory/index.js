import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'

const useSingleStory = (user, id) => {
    const storyRef = firestore.collection(`stories`)
    const query = storyRef.where('owner', '==', user.uid).where('id', '==', id)

    const [story] = useCollectionData(query)

    const editStory = (newStory) => {
        // Edit story code here
    }

    return [story[0], editStory]
}

export default useSingleStory