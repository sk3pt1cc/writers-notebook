import { useCollectionData } from "react-firebase-hooks/firestore"
import { firestore } from "../../firebase.setup"

const useSingleScene = (user, id) => {
  const sceneRef = firestore.collection('scenes')
  const query = sceneRef.where('owner', '==', user.uid).where('id', '==', id)

  const [scene] = useCollectionData(query, { idField: 'firebaseId' })

  const editScene = (newScene) => {

    console.log('newScene', newScene)

    sceneRef.doc(newScene.firebaseId).set(newScene)
  }

  if (!scene) {
    return [null, null]
  }

  return [scene[0], editScene]
}

export default useSingleScene