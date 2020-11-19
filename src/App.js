import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { SceneForm } from './components'

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
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <SceneForm />
      </div>
    </>
  );
}

export default App;
