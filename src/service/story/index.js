import * as uuid from 'uuid'
import firebase from 'firebase'
import { firestore } from '../../firebase.setup'

const edit = async () => {
    const storyRef = firestore.collection('stories')

}

const save = async (story, user) => {
    const storiesRef = firestore.collection('stories')
    const id = uuid.v4()

    await storiesRef.add({
        ...story,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        owner: user.uid,
        id
    })

    return id
}

export default {
    save,
    edit
}