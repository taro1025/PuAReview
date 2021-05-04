import axios from 'axios';
import { logout } from '../urls/index.js';


export const getLogout = (setStatus, setUser) =>{
  return axios.delete(logout, { withCredentials: true })
  .then(res => {
    setStatus(false)
    setUser({})
    return res.data
  })
  .catch((e) => console.error(e))
}
