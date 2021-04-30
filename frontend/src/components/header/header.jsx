import {COLORS, WRAPPER_SIZE, FONT_SIZE} from '../../style_constants'
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  height: 48px;
  width: 100%;
  background-color: ${COLORS.MAIN};
`;

export const TitleHeder = styled.p`
  float:left;
`;


export const HeaderIconWrapper = styled.div`
  float:right;
  text-align:center;
  margin:initial;
  margin-right: 10px;
  position: relative;
`;
export const HeaderIcon = styled(FontAwesomeIcon)`
  position: relative;
  color: #e7e7e7;
  font-size: 30px;
`;

export const HeaderIconText = styled.p`
  margin: initial;
  font-size: 11px;
`;

export const CoverLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
