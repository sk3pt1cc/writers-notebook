import * as uuid from 'uuid'
import firebase from 'firebase'
import { firestore } from '../../firebase.setup'

const collections = {
    CHARACTERS: 'characters',
    STORIES: 'stories',
    RELATIONSHIPS: 'relationships',
    SCENES: 'scenes'
}

const save = async (entity, collection, user) => {
    const ref = firestore.collection(collection)
    const id = uuid.v4()

    await ref.add({
        ...entity,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        owner: user.uid,
        id
    })

    return id
}

const batchSave = async (entities, collection, user) => {
    const ref = firestore.collection(collection)
    const batch = firestore.batch()

    entities.forEach((entity) => {
        const id = uuid.v4()

        batch.set(ref.add({ 
            ...entity,
            createdAt: firebase.firestore.FieldValue.serverTimestamp,
            owner: user.uid,
            id,
        }))
    })

    await batch.commit()
}

export default {
    save,
    batchSave,
    collections,
}
