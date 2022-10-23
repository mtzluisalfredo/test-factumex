import type { ReactNode } from 'react';

import { useReducer } from 'react';
import Context, { stateAuth as defaultState } from './context';
import { fakeAuthProvider } from './fakeAuthProvider';
import reducer from './reducer';

import type { DeepPartial, State } from './types';

function ProviderAuth({ children }: { children: ReactNode }) {
  const [stateAuth, dispatch] = useReducer(reducer, defaultState());

  const setStateAuth = (payload: DeepPartial<State>) => {
    dispatch({ type: 'UPDATE', payload });
  };

  const setUser = (payload: any) => {
    dispatch({ type: 'SET_USER', payload });
  };

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  const value: any = {
    stateAuth,
    setStateAuth,
    signin,
    signout,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ProviderAuth;
