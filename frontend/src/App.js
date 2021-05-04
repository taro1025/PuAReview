import './App.css';
import React, {useState, useEffect, createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import  Registration from './components/auth/Registrations.js';
import Login from './components/auth/Login.jsx';
import SelectPosts from './containers/SelectPosts.jsx';

import { Posts } from './containers/Posts.jsx';
import { Puas } from './containers/Puas.jsx';
import { SearchForm } from './containers/SearchForm.jsx';
import { Header } from './components/Header.jsx';


import { checkLoginStatus } from './apis/checkLoginStatus.jsx';


export const IsUserLoggedIn = createContext()

function App() {



  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState(null)

  const loginAction = (props, data) => {
    //set State of Login
    setLoggedInStatus(true)
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
       setLoggedInStatus={setLoggedInStatus}
       setUser={setUser}
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

        <Route
          path="/search"
        >
          <SearchForm/>
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
