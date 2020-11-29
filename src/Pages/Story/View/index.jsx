import React from 'react'
import { Loading } from '../../../components/reusable'
import { useAuth, useSingleStory } from '../../../custom-hooks'

const ViewStory = ({ id }) => {
    const [user] = useAuth()
    const [story] = useSingleStory(user, id)

    console.log(story)

    return (
        <Loading data={story}>
            <p>{story && story.name}</p>
        </Loading>
    )
}

export default ViewStory