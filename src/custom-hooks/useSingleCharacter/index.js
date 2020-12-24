import { useCollectionData } from "react-firebase-hooks/firestore"
import { firestore } from "../../firebase.setup"
import { databaseService } from "../../service"
import { firebaseQuery } from "../../utils"

const useSingleCharacter = (user, id) => {
  const characterCollection = databaseService.collections.CHARACTERS

  const characterRef = firestore.collection(characterCollection)
  const query = firebaseQuery(characterRef, user, 1, [['id', id]])

  const [character] = useCollectionData(query, { idField: 'firebaseId' })

  const editCharacter = (newCharacter) => {
    characterRef.doc(newCharacter.firebaseId).set(newCharacter)
  }

  if (!character) {
    return [null, null]
  }

  return [character[0], editCharacter]
}

export default useSingleCharacter