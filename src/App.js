import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Router, Link } from "@reach/router"

import { SignIn } from './components'
import { Story } from './Pages'
import { auth } from './firebase.setup'
import Stories from './Pages/Stories';

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
            <Story path="/story" />
            <Story path="/story/:id" />
            <Stories path="/stories" />
          </Router>
        )}
      </div>
    </>
  );
}

export default App;
