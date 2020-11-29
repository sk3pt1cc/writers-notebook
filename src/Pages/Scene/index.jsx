import React from 'react'
import CreateScene from './Create'
import ViewScene from './View'

const Scene = ({ id }) => (
  <>
    {id ? (
      <ViewScene id={id} />
    ) : (
      <CreateScene />
    )}
  </>
)

export default Scene