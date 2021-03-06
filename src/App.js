import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Router, Link } from "@reach/router"

import { SignIn } from './components'
import { Story, Stories, Home, Scene, Character } from './Pages'
import { auth } from './firebase.setup'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    background-color: whitesmoke;
  }

  .App {
    width: 50%;
    margin: auto;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`;

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <GlobalStyle />
      <div className="App">
        {!user ? (
          <SignIn />
        ) : (
          <Router>
            <Character path="/character" />
            <Character path="/character/:id" />
            <Story path="/story" />
            <Story path="/story/:id" />
            <Stories path="/stories" />
            <Scene path="/scene" />
            <Scene path="/scene/:id" />
            <Home path="/" />
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
