import styled from 'styled-components'
import Button from './Buttons/Button'

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 320px;
`

export const Container = styled('div')`
  background: #E9EBED;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  padding: 25px;
  box-sizing: border-box;
`

export const CenterBlockWrapper = styled('div')`
  width: 360px;
  padding: 40px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

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
`

export const Link = styled('a')`
  color: darkblue;
  cursor: pointer;
`

export const Loader = styled('div')`
  border: 12px solid #f3f3f3;
  border-top: 12px solid #FEBD81;
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
`

export const ValidationError = styled('div')`
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
`

export const Title = styled('div')`
  font-family: Open Sans, sans-serif;
  font-size: 24px;
  line-height: 25px;
  text-transform: uppercase;
`

export const LeftButton = styled(Button)`
  margin-right: 10px;
`

export const RightButton = styled(Button)`
  margin-left: 10px;
`
