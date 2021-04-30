import React, { Fragment, useEffect, useReducer, useState } from 'react';

//reducers
import {
  initialState,
  reviewsActionTypes,
  reviewReducer
} from '../reducers/reviews';

import {Footer} from '../components/Footer.jsx';
//apis
import {fetchReviews} from '../apis/reviews';

//sytle
import styled from 'styled-components';
import {COLORS, WRAPPER_SIZE, FONT_SIZE} from '../style_constants'


const Name = styled.p`
  font-size: ${FONT_SIZE.NAME_SIZE};
  font-weight: bold;
  margin: initial;
  margin-top:10px;
`;

const PuaCard = styled.div`
  position: relative;
  height: ${WRAPPER_SIZE.CARD_HEIGHT};
  width: 375px;
  margin-bottom: 5px;
  border: 1px solid;
  border-color: ${COLORS.BORDER};
  background-color: ${COLORS.CARD_COLOR};
`;

export const Reviews = ({
  match
}) => {

  const [reviewState, dispatch] = useReducer(reviewReducer, initialState);


  useEffect(() => {
    dispatch({ type: reviewsActionTypes.FETCHING })
    fetchReviews(match.params.pua_id)
    .then((data) =>
      dispatch({
        type: reviewsActionTypes.FETCH_SUCCESS,
        payload:{
          reviewsList: data.reviews
        }
      })
    )
  },[])

  return (
    <Fragment>

    {reviewState.reviewsList.map(review =>
      <PuaCard>
        <Name>{review.name}</Name>
        {review.text}
      </PuaCard>
    )}

    <Footer/>
    </Fragment>
  )
}
