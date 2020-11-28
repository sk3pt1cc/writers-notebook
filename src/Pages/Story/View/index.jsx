import React from 'react'
import { useAuth, useSingleStory } from '../../../custom-hooks'

const ViewStory = ({ id }) => {
    const [user] = useAuth()
    const [story] = useSingleStory(user, id)

    console.log(story)

    return (
        <p>{story && story.name}</p>
    )
}

export default ViewStory