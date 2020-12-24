import { useCollectionData } from "react-firebase-hooks/firestore"
import { firestore } from "../../firebase.setup"
import { databaseService } from "../../service"
import { firebaseQuery } from "../../utils"

const useSingleScene = (user, id) => {
  const sceneCollection = databaseService.collections.SCENES

  const sceneRef = firestore.collection(sceneCollection)
  const query = firebaseQuery(sceneRef, user, 1, [['id', id]])

  const [scene] = useCollectionData(query, { idField: 'firebaseId' })

  const editScene = (newScene) => {
    sceneRef.doc(newScene.firebaseId).set(newScene)
  }

  if (!scene) {
    return [null, null]
  }

  return [scene[0], editScene]
}

export default useSingleScene