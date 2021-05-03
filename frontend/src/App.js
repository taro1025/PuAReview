import './App.css';
import React, {useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import Login from './components/auth/Login.jsx';
import { Puas } from './containers/Puas.jsx';
import { Reviews } from './containers/Reviews.jsx';
import { Posts } from './containers/Posts.jsx';
import { Header } from './components/Header.jsx';
import  Registration from './components/auth/Registrations.js';
import SelectPosts from './containers/SelectPosts.jsx';

import { checkLoginStatus } from './apis/checkLoginStatus.jsx';

import axios from 'axios'
import { logged_in } from './urls/index';

export const IsUserLoggedIn = createContext()

function App() {

  const globalInitialState = {
    isOpenDialog: false,
    whichPurpose: 'REVIEW', //REVIEW, COMMENT, ADD_MENTER
    rate: 3,
    user_id: null
  };
  const [state, setDialogState] = useState(globalInitialState);

  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState(null)

  const loginAction = (props, data) => {
    //set State of Login
    setLoggedInStatus("ログインなう")
    setUser(data.user)
    //jump to top
    props.history.push("/puas")
  }

  useEffect(() => {
    checkLoginStatus(loggedInStatus, setLoggedInStatus, setUser);
  })


  return (
    <Router>

       <Header
       loggedInStatus={loggedInStatus}
       />


      <Switch>

      <Route
        exact
        path="/login"
        render={props =>
          <Login
          {...props}
          loginAction={loginAction}
          loggedInStatus={loggedInStatus}
          />
        }
      />
      <Route
        exact
        path="/signup"
        render={props =>
          <Registration
            {...props}
            loginAction={loginAction}
            loggedInStatus={loggedInStatus}
          />
        }
      />

        <Route
          exact
          path="/puas"
        >
          <Puas/>
        </Route>

        <IsUserLoggedIn.Provider value={user}>

          <Route
            exact
            path="/puas/:pua_id/reviews"
            render={({match}) =>
              <SelectPosts
                match={match}

              />
            }
          />
          <Route
            exact
            path="/puas/:pua_id/posts"
            render={({match}) =>
              <Posts
                match={match}

              />
            }
          />
        </IsUserLoggedIn.Provider>
      </Switch>


    </Router>

  );
}

          //<Route
          //  exact
          //  path="/puas/:pua_id/reviews"
          //  render={({match}) =>
          //    <Reviews
          //      match={match}
//
          //    />
          //  }
          ///>
export default App;
