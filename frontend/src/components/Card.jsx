import styled from 'styled-components';
import {COLORS, WRAPPER_SIZE, FONT_SIZE} from '../style_constants'

export const PuaCardWrapper = styled.div`
  padding-bottom: 56px;
`;

export const Name = styled.p`
  font-size: ${FONT_SIZE.NAME_SIZE};
  font-weight: bold;
  margin: initial;
  margin-top:10px;
`;

export const PuaCard = styled.div`
  position: relative;
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
  width: 351px;
  margin-bottom: 2px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${COLORS.BORDER};
  background-color: ${COLORS.CARD_COLOR};
`;
