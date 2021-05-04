//ここリファクタリングできたらいいな。useEffectあたりがまとめられる気がする。

import React, { Fragment, useEffect, useReducer } from 'react';

//reducers
import {
  initialState,
  postsActionTypes,
  postReducer
} from '../reducers/posts';
//api
import {fetchReviews} from '../apis/reviews';
import {fetchPosts} from '../apis/posts';

//to use for Tab
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {TabPanel, allyProps} from '../components/tab.jsx';

import { Reviews } from '../containers/Reviews.jsx';
import { Posts } from '../containers/Posts.jsx';
import {Footer} from '../components/Footer.jsx';

export default function SelectPosts({
  match
}) {


  const [reviewState, reviewDispatch] = useReducer(postReducer, initialState);
  useEffect(() => {
    reviewDispatch({ type: postsActionTypes.FETCHING })
    fetchReviews(match.params.pua_id)
    .then((data) =>
      reviewDispatch({
        type: postsActionTypes.FETCH_SUCCESS,
        payload:{
          postsList: data.reviews
        }
      })
    )
  },[])

  const [postState, dispatch] = useReducer(postReducer, initialState);
  useEffect(() => {
    dispatch({ type: postsActionTypes.FETCHING })
    fetchPosts(match.params.pua_id)
    .then((data) =>
      dispatch({
        type: postsActionTypes.FETCH_SUCCESS,
        payload:{
          postsList: data.posts
        }
      })
    )
  },[])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Fragment>
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="レビュー" {...allyProps(0)}/>
        <Tab label="コメント" {...allyProps(1)}/>
      </Tabs>

      <TabPanel value={value}  index={0}>
        <Reviews match={match} postState={reviewState}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Posts match={match} postState={postState}/>
      </TabPanel>

    </Paper>
    <Footer/>
    </Fragment>
  );
}
