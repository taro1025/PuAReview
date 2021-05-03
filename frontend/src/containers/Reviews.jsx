import React, { Fragment, useEffect, useReducer, useState } from 'react';

//reducers
import {
  initialState,
  postsActionTypes,
  postReducer
} from '../reducers/posts';

import {Footer} from '../components/Footer.jsx';
//apis
import {fetchReviews} from '../apis/reviews';

//components
import Rating from '@material-ui/lab/Rating';
import {PuaCardWrapper, Name, PuaCard} from '../components/Card.jsx';

export const Reviews = ({
  postState
}) => {

  return (

    <PuaCardWrapper>
      {postState.postsList.map(review =>
        <PuaCard>
          <Name>{review.name}</Name>
          <Rating value={review.star}/><br/>
          {review.text}
        </PuaCard>
      )}
    </PuaCardWrapper>

  )
}
