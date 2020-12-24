import React from 'react'
import { Link } from '@reach/router'

const Home = () => (
  <>
    <div>
      <Link to="stories">Stories</Link>
    </div>
    <div>
      <Link to="story">Create Story</Link>
    </div>
    <div>
      <Link to="scene">Create Scene</Link>
    </div>
    <div>
      <Link to="character">Create Character</Link>
    </div>
  </>
)

export default Home
