import axios from 'axios';
import {postsIndex} from '../urls/index';

export const createPost = (params) => {
  return axios.post(postsIndex(params.pua_id),
    {
      name: params.name,
      text: params.text,
      pua_id: params.pua_id
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
};
