import { createContext } from 'react';

import type { Context as ContextType, State } from './types';

export const stateAuth = (): State => ({
  loading: true,
  user: null,
});

export const context = (): ContextType => ({
  stateAuth: stateAuth(),
  setStateAuth: () => {},
  signin: () => {},
  signout: () => {},
});

const Context = createContext<ContextType>(context());

export default Context;
