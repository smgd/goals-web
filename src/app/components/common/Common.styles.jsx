import styled from 'styled-components';

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled('div')`
  background-color: #8DC26F;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const WhiteCard = styled('div')`
  width: 360px;
  padding: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const Input = styled('input')`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
