import styled from 'styled-components';

interface StylingProps {
  isRolling: boolean;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  button {
    grid-column: 1 / -1;
    padding: 16px 48px;
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: -16px;
    border-radius: 16px;
    background-color: #333;
    font-weight: bold;
    color: #fff;
    border: none;
    box-shadow: 0px 5px 15px rgba(51, 51, 51, 0.25);
    cursor: pointer;
    width: 300px;
    transition: background-color .3s ease, width .5s ease;
    outline: none;
    :hover {
      background-color: #2AC289;
    }
    :disabled {
      background-color: #333;
      cursor: progress;
    }
  }
  column-gap: 20px;
  row-gap: 75px;
  max-width: 600px;
  border: 2px solid #2AC289;
  padding: 100px;
  padding-bottom: 0;
  border-radius: 16px;
  box-shadow: 0px 15px 30px rgba(51, 51, 51, 0.25);  

  ${({ isRolling }: StylingProps) => isRolling && `
      div {
        animation-name: wobble;
        animation-duration: 1s;
      };`}



  @keyframes wobble {
    from {
      transform: translate3d(0, 0, 0)
    }

    15% {
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

`;

export default Container;
