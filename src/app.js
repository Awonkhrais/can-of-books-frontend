import React from 'react';
import Header from './header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './footer';
import Login from './Login';
import MyFavoriteBooks from './myFavoriteBooks'
import Profile from './Profile'
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props)
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `MyFavoriteBooks` component, if they are not, render the `Login` component */}
              {this.props.auth0.isAuthenticated ? <MyFavoriteBooks /> : <Login />}

            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
            
            {/* or other way */}
            {/* <Route exact path="/profile" component={Profile} /> */}


          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
