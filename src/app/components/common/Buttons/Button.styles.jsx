import styled from 'styled-components';

const ButtonWrapper = styled('button')`
  width: 150px;
  height: 40px;
  border-radius: 2px;
  color: ${(props) => props.theme.font};
  border: ${(props) => props.theme.border};
  background: ${(props) => props.theme.background};
  cursor: pointer;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: inline-block;
  &:hover {
    box-shadow: 0 14px 18px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

const Title = styled('div')`
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  line-height: 25px;
`;

ButtonWrapper.Title = Title;

export default ButtonWrapper;
