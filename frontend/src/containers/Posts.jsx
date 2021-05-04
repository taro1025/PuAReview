import React, { Fragment } from 'react';
import {PuaCardWrapper, Name, PuaCard} from '../components/Card.jsx';

export const Posts = ({
  postState
}) => {

  return (
    <Fragment>
    <PuaCardWrapper>
      {postState.postsList.map(post =>
        <PuaCard>
          <Name>{post.name}</Name>

          {post.text}
        </PuaCard>
      )}
    </PuaCardWrapper>

    </Fragment>
  )
}
