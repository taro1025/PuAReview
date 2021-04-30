import React, { Fragment, useReducer, useEffect } from 'react';

//apis
import { fetchPuas } from '../apis/puas';

//reducers
import {
  initialState,
  puasActionTypes,
  puasReducer
} from '../reducers/puas';

//footer
import { Footer } from '../components/Footer.jsx';

//urls
import { Link } from "react-router-dom";

//images
import ManImage from '../images/1.jpg';
import WomanImage from '../images/0.jpg';

//styles
import styled from 'styled-components';
import {COLORS, WRAPPER_SIZE, FONT_SIZE} from '../style_constants'


const PuaCard = styled.div`
  position: relative;
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
  width: 375px;
  margin-bottom: 5px;
  border: 1px solid;
  border-color: ${COLORS.BORDER};
  background-color: ${COLORS.CARD_COLOR};
`;

const CoverLink = styled(Link)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const PuaImage = styled.img`
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${WRAPPER_SIZE.CARD_HEIGHT};
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
  width: ${WRAPPER_SIZE.CARD_WIDTH}-${WRAPPER_SIZE.CARD_HEIGHT};
`;

const Name = styled.p`
  font-size: ${FONT_SIZE.NAME_SIZE};
  font-weight: bold;
  margin: initial;
  margin-top:10px;
`;

const Star = styled.p`
  margin: initial;
  margin-left: 10px;
`;

const StarCounter = styled.span`
`

const Budget = styled.p`
  margin: initial;
  float: right;
`

export const Puas = () => {

  const [state, dispatch] = useReducer(puasReducer, initialState)

  useEffect(() =>{
    dispatch({ type: puasActionTypes.FETCHING });
    fetchPuas()
    .then((data) =>
      dispatch({
        type: puasActionTypes.FETCH_SUCCESS,
        payload: {
          puas: data.puas
        }
      })
    )
  },[])

  return (
    <Fragment>

    講師一覧
    {
    state.puasList.map(pua =>

      <PuaCard>
        {pua.sex == 1 ? (
          <PuaImage src={ManImage} />
        ) : (
          <PuaImage src={WomanImage} />
        )}
        <TextWrapper>
          <Name>{pua.name}</Name>
          <Star>
          ★★★★☆(仮)
            {pua.countReview ?
              (<StarCounter>{pua.countReview}</StarCounter>)
              :
              (<StarCounter>0</StarCounter>)}
          </Star>
          <Budget>平均予算 3,000,000円(仮)</Budget>
        </TextWrapper>
        <CoverLink to={`/puas/${pua.id}/reviews`}/>
      </PuaCard>

    )
    }
    <Footer/>

    </Fragment>

  )
}
