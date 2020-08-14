import React from 'react';

import {
  FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix,
} from 'react-icons/fa';
import Container from './styles';

export interface IDie {
  face: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
}

const Die: React.FC<IDie> = ({ face }) => {
  const die = {
    one: <FaDiceOne />,
    two: <FaDiceTwo />,
    three: <FaDiceThree />,
    four: <FaDiceFour />,
    five: <FaDiceFive />,
    six: <FaDiceSix />,
  };

  return (
    <Container>
      {die[face]}
    </Container>
  );
};

export default Die;
