import axios from 'axios'
import { createUser } from '../urls/index';

export const postRegistrations = (e,props) => {
  return axios.post(createUser,
    {
      email: e.email,
      password: e.password,
    },
    { withCredentials: true })
  .then(response => {
    if(response.request.status == '200'){
      props.loginAction(props, response.data)
    }
  })
  .catch(error => {
      console.log("registration error", error)
  })
};
