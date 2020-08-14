import React from 'react';
import RollDice from '../containers/RollDice';
import GlobalStyle from '../styles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <RollDice />
    </>
  );
}

export default App;
