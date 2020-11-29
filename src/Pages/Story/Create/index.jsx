import React from 'react'
import { navigate } from '@reach/router'
import { Button, Input } from '../../../components/reusable'
import { useAuth, useStories } from '../../../custom-hooks'


const CreateStory = () => {
    const [user] = useAuth()
    const [_, saveNewStory] = useStories(user)
    const [name, setName] = React.useState()
    

    const saveStory = async () => {
        const id = await saveNewStory({ name })
        navigate(`/story/${id}`)
    }

    return (
        <>
            <h3>Story Name</h3>
            <Input placeholder="Enter your story name" onChange={setName} />
            <Button onClick={saveStory} >Submit</Button>
        </>
    )
}

export default CreateStory
