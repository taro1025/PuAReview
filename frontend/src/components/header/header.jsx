import {COLORS} from '../../style_constants'
import styled from 'styled-components';

import { Link } from "react-router-dom";

import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';

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

export const HeaderIconLoggedIn = styled(LockOpenIcon)`
  margin-top: 7px;
`;

export const HeaderIconLoggedInYet = styled(LockIcon)`
  margin-top: 7px;
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
