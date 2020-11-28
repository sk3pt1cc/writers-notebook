import { useDocumentData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'

const useSingleStory = (user, id) => {

    console.log(user, id)

    const storyRef = firestore.collection(`stories`).doc(id)

    const [story] = useDocumentData(storyRef, { idField: 'id' })

    if (story && story.owner !== user.uid) {
        console.error('You are not authorized to view this story.')
        return;
    }

    const editStory = (newStory) => {
        // Edit story code here
    }

    return [story, editStory]
}

export default useSingleStory