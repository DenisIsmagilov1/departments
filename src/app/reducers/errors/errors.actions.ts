import { Action } from '@ngrx/store';

export enum types {
  set = '[ERRORS] Set error',
  reset = '[ERRORS] Reset error',
}

export class SetErrorAction implements Action {
  readonly type = types.set;
  constructor(public payload: {
    message: string
  }) { }
}

export class ResetErrorAction implements Action {
  readonly type = types.reset;
}


export type ErrorsActions = SetErrorAction | ResetErrorAction;
