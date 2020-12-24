import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'
import { databaseService } from '../../service'

const useScenes = (user, limit=null, filterTerm=null) => {
  const scenesCollection = databaseService.collections.SCENES

  const scenesRef = firestore.collection(scenesCollection)
  const query = firebaseQuery(scenesRef, user, limit, filterTerm)

  const [scenes] = useCollectionData(query, { idField: 'firebaseId' })

  const saveNewScene = (scene) => {
    return databaseService.save(
      scene,
      scenesCollection,
      user
    )
  }

  if (!scenes) {
    return [[], saveNewScene]
  }

  return [scenes, saveNewScene]
}

export default useScenes