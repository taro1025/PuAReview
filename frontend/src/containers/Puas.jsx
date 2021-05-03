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
import {TextLink} from '../components/links/links.jsx';

//images
import ManImage from '../images/1.jpg';
import WomanImage from '../images/0.jpg';

//styles
import styled from 'styled-components';
import {COLORS, WRAPPER_SIZE, FONT_SIZE} from '../style_constants'
import Rating from '@material-ui/lab/Rating';
import SmsIcon from '@material-ui/icons/Sms';

const PuaCard = styled.div`
  position: relative;
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
  width: 375px;
  margin-bottom: 2px;
  border: 0.2px solid;
  border-color: ${COLORS.BORDER};
  background-color: ${COLORS.CARD_COLOR};
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

const StarCountIcon = styled(SmsIcon)`
  font-size: 12;
  color: #9B9B9B;
`;
const StarCounter = styled.span`
  padding-left: 10px;
`;

const StarAverage = styled.span`
  font-size:${FONT_SIZE.NAME_SIZE};
  font-weight: bold;
`;

const Budget = styled.p`
  margin: initial;
  float: right;
`

export const Puas = () => {

  const [state, dispatch] = useReducer(puasReducer, initialState)

  const puas = state.puas
  console.log(`puas`,puas)

  const reviewsCountSet = state.reviewsCountSet
  const reviewsAverageSet = state.reviewsAverageSet

  useEffect(() =>{
    dispatch({ type: puasActionTypes.FETCHING });
    fetchPuas()
    .then((data) =>
      dispatch({
        type: puasActionTypes.FETCH_SUCCESS,
        payload: {
          puas: data.puas,
          reviewsCountSet: data.reviewsCountSet,
          reviewsAverageSet: data.reviewsAverageSet
        }
      })
    )
  },[])

  return (
    <Fragment>

    講師一覧
    <div>
    { console.log(`puas:`,state.puas)}
    {

      puas.map((pua, i)=>

        <PuaCard>
          {pua.sex == 1 ? (
            <PuaImage src={ManImage} />
          ) : (
            <PuaImage src={WomanImage} />
          )}
          <TextLink to={`/puas/${pua.id}/reviews`}>
            <TextWrapper>
              <Name>{pua.name}</Name>
              <Star>
              <Rating
                name="customized-empty"
                value={reviewsAverageSet[i]}
                precision={0.5}

              /><StarAverage>{reviewsAverageSet[i]}</StarAverage>
                {reviewsCountSet[i] ?
                  (<StarCounter><StarCountIcon/> {reviewsCountSet[i]}件</StarCounter>)
                  :
                  (<StarCounter><StarCountIcon/> 0件</StarCounter>)}
              </Star>
              <Budget>平均予算 3,000,000円(仮)</Budget>

            </TextWrapper>
          </TextLink>

        </PuaCard>

      )
    }
    </div>
    <Footer/>

    </Fragment>

  )
}
