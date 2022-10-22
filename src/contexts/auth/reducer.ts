import type { DeepPartial, State } from './types';

import { stateAuth as defaultState } from './context';

export type Action = {
  type: 'INIT' | 'UPDATE';
  payload: DeepPartial<State>;
};

function reducer(state: State, action: Action): State {
  const { payload, type } = action;

  let intermediate: State = {};

  switch (type) {
    case 'INIT':
      intermediate = defaultState();
      break;
    case 'UPDATE':
      intermediate = {
        ...state,
        ...payload,
      };
      break;
    default:
      break;
  }

  return {
    ...intermediate,
  };
}

export default reducer;
