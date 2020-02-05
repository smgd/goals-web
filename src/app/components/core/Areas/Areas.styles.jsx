import styled from 'styled-components';
import { Title } from "../../common/Common.styles";

const AreasWrapper = styled('div')`
  width: 100%;
  display: grid;
  grid-template-areas:
    'title title title button'
    'areas areas areas areas';
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: max-content;
  grid-gap: 0;
`;

const AreaTitle = styled(Title)`
  grid-area: title;
  padding-bottom: 25px;
`;

const Button = styled('div')`
  grid-area: button;
  display: flex;
  justify-content: right;
`;

const Areas = styled('div')`
  grid-area: areas;
  align-items: flex-start;
`;

AreasWrapper.Title = AreaTitle;
AreasWrapper.Button = Button;
AreasWrapper.Areas = Areas;

export default AreasWrapper;

export const AreaInputs = styled('div')`
  display: flex;
  flex-direction: column;
`;
