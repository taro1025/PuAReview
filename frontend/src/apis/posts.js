import axios from 'axios';
import { postsIndex } from '../urls/index';

export const fetchPosts = (pua_id) => {
  return axios.get(postsIndex(pua_id))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
