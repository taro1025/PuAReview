import axios from 'axios';
import { reviewsIndex } from '../urls/index';

export const fetchReviews = (pua_id) => {
  return axios.get(reviewsIndex(pua_id))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
