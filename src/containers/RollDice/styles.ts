import styled from 'styled-components';

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
    transition: background-color .3s ease;
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

`;

export default Container;
