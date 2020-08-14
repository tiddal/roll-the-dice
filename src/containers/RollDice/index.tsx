import React, { useState, useEffect } from 'react';
import Die, { IDie } from '../../components/Die';

import Container from './styles';

const RollDice: React.FC = () => {
  const [dieOne, setDieOne] = useState<IDie['face']>('one');
  const [dieTwo, setDieTwo] = useState<IDie['face']>('one');

  function rollTheDices() {
    const sides: IDie['face'][] = ['one', 'two', 'three', 'four', 'five', 'six'];
    setDieOne(sides[Math.floor(Math.random() * sides.length)]);
    setDieTwo(sides[Math.floor(Math.random() * sides.length)]);
  }

  useEffect(() => {
    rollTheDices();
  }, []);

  return (
    <Container>
      <Die face={dieOne} />
      <Die face={dieTwo} />
      <button type="button" onClick={rollTheDices}>Roll Dice!</button>
    </Container>
  );
};

export default RollDice;
