/* eslint-disable no-unused-vars */
export type State = {
  loading?: boolean;
};

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Context = {
  stateAuth: State;

  setStateAuth: (nextState?: DeepPartial<State>) => void;
};
