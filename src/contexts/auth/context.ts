import { createContext } from 'react';

import type { Context as ContextType, State } from './types';

export const stateAuth = (): State => ({
  loading: true,
});

export const context = (): ContextType => ({
  stateAuth: stateAuth(),
  setStateAuth: () => stateAuth(),
});

const Context = createContext<ContextType>(context());

export default Context;
