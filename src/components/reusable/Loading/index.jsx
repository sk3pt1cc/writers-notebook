import React from 'react'

const Loading = ({ data, children }) => {
  if (!data) {
    return <p>Loading...</p>
  }

  return children
}

export default Loading