import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore } from "../../firebase.setup";
import { relationshipService } from "../../service";
import { firebaseQuery } from "../../utils";

const useRelationships = (user, limit=null, filterTerm=null) => {
    const relationshipsRef = firestore.collection('relationships')
    const query = firebaseQuery(relationshipsRef, user, limit, filterTerm)

    const [relationships] = useCollectionData(query)

    const addNewRelationships = (parent, children) => {
        relationshipService.save(user.uid, parent, children)
    }

    if (!relationships) {
        return [[]]
    }

    return [relationships, addNewRelationships]
}

export default useRelationships;
