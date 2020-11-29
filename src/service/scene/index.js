import * as uuid from 'uuid'
import firebase from 'firebase'
import { firestore } from '../../firebase.setup'

const edit = async () => {

}

const save = async (scene, user) => {
    const scenesRef = firestore.collection('scenes')
    const id = uuid.v4()
    const actions = []

    actions.push(
        scenesRef.add({
          ...scene,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          owner: user.uid,
          id
        })
    )

    return id
}

export default {
    save,
    edit
}