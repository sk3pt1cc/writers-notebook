import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from '../../firebase.setup'
import { firebaseQuery } from '../../utils'
import { databaseService } from '../../service'

const useCharacters = (user, limit=null, filterTerm=null) => {
    const charactersCollection = databaseService.collections.CHARACTERS

    const charactersRef = firestore.collection(charactersCollection)
    const query = firebaseQuery(charactersRef, user, limit, filterTerm)

    const [characters] = useCollectionData(query)

    const saveNewCharacter = (character) => {
        return databaseService.save(character, charactersCollection, user)
    }

    if (!characters) {
        return [[], saveNewCharacter]
    }

    return [characters, saveNewCharacter]
}

export default useCharacters