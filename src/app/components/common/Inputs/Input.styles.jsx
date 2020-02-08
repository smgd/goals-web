import styled from 'styled-components'

const InputWrapper = styled('input')`
  width: 320px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.border};
  background: ${(props) => props.theme.background};
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
`

export default InputWrapper
