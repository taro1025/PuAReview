import axios from 'axios';
import {puasIndex} from '../urls/index';

export const addPua = (params) => {
  console.log(`lll`,params)
  return axios.post(puasIndex,
    {
      name: params.name,
      sex: params.sex,
      twitterAccountUrl: params.twitterAccountUrl,
    }
  )
  .then(res => {
    console.log(`${params}`)
    return res.data
  })
  .catch((e) => console.error(e))
};
