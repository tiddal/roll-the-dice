import React, { useState, useEffect } from 'react';
import Die, { IDie } from '../../components/Die';

import Container from './styles';

const RollDice: React.FC = () => {
  const [dieOne, setDieOne] = useState<IDie['face']>('one');
  const [dieTwo, setDieTwo] = useState<IDie['face']>('three');
  const [isRolling, setIsRolling] = useState(false);

  function rollTheDices() {
    const sides: IDie['face'][] = ['one', 'two', 'three', 'four', 'five', 'six'];
    setIsRolling(true);
    setTimeout(() => {
      setDieOne(sides[Math.floor(Math.random() * sides.length)]);
      setDieTwo(sides[Math.floor(Math.random() * sides.length)]);
    }, 350);
    setTimeout(() => {
      setIsRolling(false);
    }, 1000);
  }

  useEffect(() => {
    rollTheDices();
  }, []);

  return (
    <Container isRolling={isRolling}>
      <Die face={dieOne} />
      <Die face={dieTwo} />
      <button type="button" onClick={rollTheDices} disabled={isRolling}>
        {isRolling ? 'Rolling...' : 'Click to roll the dice!'}
      </button>
    </Container>
  );
};

export default RollDice;
