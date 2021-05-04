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

import { GeneratePuaCard } from '../components/PuaCard.jsx';


export const Puas = () => {

  const [state, dispatch] = useReducer(puasReducer, initialState)

  const puas = state.puas


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
    
    {

      puas.map((pua, i)=>
        <GeneratePuaCard
          pua={pua}
          reviewsCountSet={reviewsCountSet}
          reviewsAverageSet={reviewsAverageSet}
          index={i}
        />
      )
    }
    </div>
    <Footer/>

    </Fragment>

  )
}
