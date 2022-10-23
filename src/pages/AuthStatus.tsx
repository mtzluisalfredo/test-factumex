import React from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/auth';

function AuthStatus() {
  let navigate = useNavigate();
  let { stateAuth, signout } = useAuth();
  const { user } = stateAuth;
  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome {user}!{' '}
      <button
        onClick={() => {
          signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

export default AuthStatus;
