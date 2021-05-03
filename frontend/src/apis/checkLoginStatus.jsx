import axios from 'axios';
import { logged_in } from '../urls/index';

export const checkLoginStatus = (loggedInStatus, setLoggedInStatus, setUser) => {
  return axios.get(logged_in, { withCredentials: true })
    .then(response => {
      console.log(`check loggedin:`,response.data)
      console.log(`check status:`,loggedInStatus)
      if (response.data.logged_in && loggedInStatus === "未ログイン") {

        setLoggedInStatus("ログインなう")
        setUser(response.data.user)
      } else if (!response.data.logged_in && loggedInStatus === "ログインなう") {

        setLoggedInStatus("未ログイン")
        setUser({})
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
}
