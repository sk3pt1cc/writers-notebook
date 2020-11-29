import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'
import { storyService } from '../../service'

const useStories = (user, limit=null, filterTerm=null) => {
    const storiesRef = firestore.collection('stories')
    const query = firebaseQuery(storiesRef, user, limit, filterTerm)

    const [stories] = useCollectionData(query)

    const saveNewStory = (story) => {
        return storyService.save(story, user)
    }

    if (!stories) {
        return [[], saveNewStory]
    }

    return [stories, saveNewStory]
}

export default useStories