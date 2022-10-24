/* eslint-disable no-unused-vars */
export type State = {
  loading?: boolean;
  user?: any;
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Context = {
  stateAuth: State;
  setStateAuth: (nextState?: DeepPartial<State>) => void;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
};
