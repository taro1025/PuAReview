import axios from 'axios';
import { puasIndex } from '../urls/index'

export const fetchPuas = () => {
  return axios.get(puasIndex)
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e))
}
