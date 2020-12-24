import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../firebase.setup";
import { databaseService } from "../../service";
import { firebaseQuery } from "../../utils";

const useRelationships = (user, limit = null, filterTerm = null) => {
    const relationshipsCollection = databaseService.collections.RELATIONSHIPS
    const relationshipsRef = firestore.collection(relationshipsCollection)
    const query = firebaseQuery(relationshipsRef, user, limit, filterTerm)

    const [relationships] = useCollectionData(query)

    const addNewRelationships = (parent, children) => {
        const relationships = children.map(child => ({
            parent,
            child,
        }))

        databaseService.batchSave(relationships, relationshipsCollection, user)
    }

    if (!relationships) {
        return [[]]
    }

    return [relationships, addNewRelationships]
}

export default useRelationships;
