import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import * as uuid from 'uuid'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'

const useScenes = (user, limit=null, filterTerm=null) => {
  const scenesRef = firestore.collection('scenes')
  const query = firebaseQuery(scenesRef, user, limit, filterTerm)

  const [scenes] = useCollectionData(query)

  const saveNewScene = async (scene) => {
    const id = uuid.v4()

    await scenesRef.add({
      ...scene,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
      owner: user.uid,
      id
    })

    return id
  }

  if (!scenes) {
    return [[], saveNewScene]
  }

  return [scenes, saveNewScene]
}

export default useScenes