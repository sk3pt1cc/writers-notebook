import React from 'react'
import { Button, Input } from '../../../components/reusable'
import { useAuth, useStories } from '../../../custom-hooks'


const CreateStory = () => {
    const [user] = useAuth()
    const [_, saveNewStory] = useStories(user)
    const [name, setName] = React.useState()
    

    const saveStory = () => {
        saveNewStory({ name })
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
