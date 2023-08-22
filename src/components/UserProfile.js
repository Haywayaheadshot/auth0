import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';

function UserProfile() {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>User is Loading!</div>
        )
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <img src={user.name} alt="User Dp"/>
        <Logout />
    </div>
  )
}

export default UserProfile;