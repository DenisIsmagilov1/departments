import { types } from './errors.actions';

export const errorsNode = 'errors';

export interface ErrorsState {
  message: string;
}

const initilalState: ErrorsState = {
  message: ''
};

export const errorsReducer = (state = initilalState, action) => {
  switch (action.type) {
    case types.set:
      return {
        ...state,
        message: action.payload.message
      };
    case types.reset:
      return {
        ...state,
        message: ''
      };
    default:
      return state;
  }
};
