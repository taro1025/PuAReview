import axios from 'axios';
import { login } from '../urls/index'

export const postLogin = (e, props) =>{

  return axios.post(login,
    {
      email: e.email,
      password: e.password,
    },
    { withCredentials: true })
    .then(response => {
      console.log(`login:`, response.data)
      if(response.data.logged_in){
        props.loginAction(props, response.data)
      }
    })
    .catch(error => {
        console.log("login error", error)
    })
};
