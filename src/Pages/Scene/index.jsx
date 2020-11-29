import React from 'react'

const Scene = ({ id }) => (
  <>
    {id ? (
      <p>View scene</p>
    ) : (
      <p>Create scene</p>
    )}
  </>
)

export default Scene