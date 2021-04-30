import axios from 'axios';
import {reviewsIndex} from '../urls/index';

export createReview = (params) => {
  return axios.post(reviewsIndex(params.pua_id),
    {
      name: params.name,
      star: params.star,
      text: params.text,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
};
