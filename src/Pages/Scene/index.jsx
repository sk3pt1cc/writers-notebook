import React from 'react'
import CreateScene from './Create'

const Scene = ({ id }) => (
  <>
    {id ? (
      <p>View scene</p>
    ) : (
      <CreateScene />
    )}
  </>
)

export default Scene