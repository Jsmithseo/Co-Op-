import React from 'react';
import { useIdentityContext } from 'react-netlify-identity';
import { navigate } from 'gatsby';
 
const IdentityLogin = ({ showModal }) => {
  const identity = useIdentityContext("https://marin-city-co-op.netlify.app");

  if ( identity && identity.isLoggedIn ) {
    navigate('/dashboard/secret', { replace: true })
  }

  return (
    <>
      <h1>Login in or Sign up</h1>
      <button onClick={showModal}>Log in</button>
    </>
  );
}

export default IdentityLogin;