import React from 'react'
import CreateCharacter from './Create'
import ViewCharacter from './View'

const Character = ({ id }) => (
    <>
        {id ? (
            <ViewCharacter id={id} />
        ) : (
            <CreateCharacter />
        )}
    </>
)

export default Character