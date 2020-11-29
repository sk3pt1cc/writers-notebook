import firebase from 'firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'
import { sceneService } from '../../service'

const useScenes = (user, limit=null, filterTerm=null) => {
  const scenesRef = firestore.collection('scenes')
  const query = firebaseQuery(scenesRef, user, limit, filterTerm)

  const [scenes] = useCollectionData(query, { idField: 'firebaseId' })

  const saveNewScene = (scene) => {
    return sceneService.save(scene, user)
  }

  if (!scenes) {
    return [[], saveNewScene]
  }

  return [scenes, saveNewScene]
}

export default useScenes