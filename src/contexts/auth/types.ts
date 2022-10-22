export type State = {
  loading?: boolean;
};

export type Context = {
  stateAuth: State;
  setStateAuth: (nextState: DeepPartial<State>) => void;
};
