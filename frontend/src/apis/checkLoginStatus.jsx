import axios from 'axios';
import { logged_in } from '../urls/index';

export const checkLoginStatus = (loggedInStatus, setLoggedInStatus, setUser) => {
  return axios.get(logged_in, { withCredentials: true })
    .then(response => {
      console.log(`check loggedin:`,response.data.logged_in)
      console.log(`check status:`,loggedInStatus)
      if (response.data.logged_in && loggedInStatus === "未ログイン") {
        console.log(`ok:`,response)
        setLoggedInStatus("ログインなう")
        setUser(response.data.user)
      } else if (!response.data.logged_in && loggedInStatus === "ログインなう") {
        console.log(`no!:`,response)
        setLoggedInStatus("未ログイン")
        setUser({})
      }
    })
    .catch(error => {
      console.log("ログインエラー", error)
    })
}
