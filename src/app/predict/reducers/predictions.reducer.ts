import { Action } from '@ngrx/store';
import { Prediction } from '.';
import { PredictActions } from '../actions';


export const initialState: Prediction[] = [];

export function reducer(state = initialState, action: PredictActions): Prediction[] {
  switch (action.type) {

    default:
      return state;
  }
}
