import { navigate } from '@reach/router'
import React from 'react'
import { Loading } from '../../components/reusable'
import { useAuth, useStories } from '../../custom-hooks'

const Stories = () => {
    const [user] = useAuth()
    const [stories] = useStories(user)
    
    return (
        <Loading data={stories}>
            {stories.length === 0 && (
                <p>You haven't created any stories. Click <a href="/story">here</a> to create one now.</p>
            )}
            {stories.map(story => (
                <div>
                    <button onClick={() => navigate(`/story/${story.id}`)}>
                        {story.name}
                    </button>
                </div>
            ))}
        </Loading>
    )
}

export default Stories