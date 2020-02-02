import styled from 'styled-components';

const AreasWrapper = styled('div')`
  width: 100%;
  padding: 25px;
  display: grid;
  grid-template-areas:
    'title title title button'
    'areas areas areas areas';
  grid-template-columns: 15% 35% 35% 15%;
  grid-gap: 0;
`;

const Title = styled('div')`
  grid-area: title;
  font-family: Open Sans, sans-serif;
  font-size: 24px;
  line-height: 25px;
  text-transform: uppercase;
`;

const Button = styled('div')`
  grid-area: button;
`;

const Areas = styled('div')`
  grid-area: areas;
`;

AreasWrapper.Title = Title;
AreasWrapper.Button = Button;
AreasWrapper.Areas = Areas;

export default AreasWrapper;
