import axios from 'axios';
import {searchedPuas} from '../urls/index';

export const searchPuas = (params) => {
  return axios.post(searchedPuas,
    {
      name: params.name,
    }
  )
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
};
