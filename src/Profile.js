import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(this.props.auth0)
    return (

      <div>

        { 
          isAuthenticated &&
          <div>
            <h2>Hi {user.name}</h2>
            <p>Email:{user.email}</p>
            <img src={user.picture} alt={user.name} />

          </div>

        }


      </div>
    );
  }
}

export default withAuth0(Profile);