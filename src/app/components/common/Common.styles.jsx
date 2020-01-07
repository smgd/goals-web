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

export const ModalCard = styled('div')`
  position: absolute;
  top: 50%;
  bottom: 50%;
  width: 350px;
  height: min-content;
  padding: 25px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const Link = styled('a')`
  color: darkblue;
  cursor: pointer;
`;

export const Loader = styled('div')`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #9ffc85;
  border-radius: 50%;
  margin: auto;
  display: flex;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } 
`;
