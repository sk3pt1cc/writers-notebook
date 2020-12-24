import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'
import { databaseService } from '../../service'

const useStories = (user, limit=null, filterTerm=null) => {
    const storyCollection = databaseService.collections.STORIES;

    const storiesRef = firestore.collection(storyCollection)
    const query = firebaseQuery(storiesRef, user, limit, filterTerm)

    const [stories] = useCollectionData(query)

    const saveNewStory = (story) => {
        return databaseService.save(story, storyCollection, user)
    }

    if (!stories) {
        return [[], saveNewStory]
    }

    return [stories, saveNewStory]
}

export default useStories