import React from 'react'
import { auth } from '../../firebase.setup';

const Story = ({ id }) => (
    <>
        {id ? (
            <p>Viewing story with id {id}</p>
        ) : (
            <p>Create new story</p>
        )}
    </>
);

export default Story