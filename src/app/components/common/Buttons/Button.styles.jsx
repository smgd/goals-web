import styled from 'styled-components';

const ButtonWrapper = styled('button')`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  color: ${(props) => props.theme.font};
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.background};
  cursor: pointer;
  margin: 0 10px;
`;

const Title = styled('div')`
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  line-height: 25px;
`;

ButtonWrapper.Title = Title;

export default ButtonWrapper;
