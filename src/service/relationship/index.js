import * as uuid from 'uuid'
import { firestore } from "../../firebase.setup"

// Creates a relationship between each of the entities. This will always be a parent -> child relationship.
const save = async (userId, parent, children) => {
    const relationshipsRef = firestore.collection('relationships')
    const batch = firestore.batch()

    children.forEach((child) => {
        const relationshipId = uuid.v4()

        const relationship = {
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            parent,
            child,
            owner: userId,
            id: relationshipId
        };

        batch.set(relationshipsRef.add(relationship))
    })

    await batch.commit()
}

export default {
    save
}