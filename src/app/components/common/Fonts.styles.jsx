import styled from 'styled-components'

const Fonts = {}

const H1 = styled('h1')`
  font-family: Open Sans, sans-serif;
  font-size: 24px;
  margin: 0;
  padding: 0;
`

const H2 = styled('h2')`
  font-family: Open Sans, sans-serif;
  font-size: 18px;
  margin: 0;
  padding: 0;
`

const Paragraph = styled('p')`
  font-family: Open Sans, sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
`

Fonts.H1 = H1
Fonts.H2 = H2
Fonts.Paragraph = Paragraph


export default Fonts
