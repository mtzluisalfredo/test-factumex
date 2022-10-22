import type { ReactNode } from 'react';

import { useReducer } from 'react';
import Context, { stateAuth as defaultState } from './context';
import reducer from './reducer';

import type { State } from './types';


function ProviderAuth({ children }: { children: ReactNode }) {
  const [stateAuth, dispatch] = useReducer(reducer, defaultState());

  const setStateAuth = (payload: DeepPartial<State>) => {
    dispatch({ type: 'UPDATE', payload });
  };

  const value = {
    stateAuth,
    setStateAuth,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default ProviderAuth;
