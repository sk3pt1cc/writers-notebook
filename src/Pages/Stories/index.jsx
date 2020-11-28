import { navigate } from '@reach/router'
import React from 'react'
import { useAuth, useStories } from '../../custom-hooks'

const Stories = () => {
    const [user] = useAuth()
    const [stories] = useStories(user)

    return (
        <div>
            {stories && stories.map(story => (
                <div>
                    <button onClick={() => navigate(`/story/${story.id}`)}>
                        {story.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Stories