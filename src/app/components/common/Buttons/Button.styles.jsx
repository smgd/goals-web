import styled from 'styled-components';

const ButtonWrapper = styled('button')`
  width: 150px;
  height: 40px;
  border-radius: 2px;
  color: ${(props) => props.theme.font};
  border: ${(props) => props.theme.border};
  box-shadow: 0 4px 4px #F3F3F3;
  background: ${(props) => props.theme.background};
  cursor: pointer;
  padding: 0;
`;

const Title = styled('div')`
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  line-height: 25px;
`;

ButtonWrapper.Title = Title;

export default ButtonWrapper;
