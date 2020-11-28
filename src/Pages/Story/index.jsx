import React from 'react'
import { auth } from '../../firebase.setup';
import CreateStory from './Create';
import ViewStory from './View';

const Story = ({ id }) => (
    <>
        {id ? (
            <ViewStory id={id} />
        ) : (
            <CreateStory />
        )}
    </>
);

export default Story