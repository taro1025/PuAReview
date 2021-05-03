import axios from 'axios';
import {reviewsIndex} from '../urls/index';

export const createReview = (params) => {
  console.log(`lll`,params)
  return axios.post(reviewsIndex(params.pua_id),
    {
      name: params.name,
      star: params.star,
      text: params.text,
      pua_id: params.pua_id
    }
  )
  .then(res => {
    console.log(`${params}`)
    return res.data
  })
  .catch((e) => console.error(e))
};
