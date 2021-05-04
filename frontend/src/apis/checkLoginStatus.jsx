import axios from 'axios';
import { logged_in } from '../urls/index';

export const checkLoginStatus = (loggedInStatus, setLoggedInStatus, setUser) => {
  return axios.get(logged_in, { withCredentials: true })
    .then(response => {
      console.log(`check loggedin:`,response.data)

      if (response.data.logged_in && loggedInStatus === false) {

        setLoggedInStatus(true)
        setUser(response.data.user)
      } else if (!response.data.logged_in && loggedInStatus === true) {

        setLoggedInStatus(false)
        setUser({})
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
}
