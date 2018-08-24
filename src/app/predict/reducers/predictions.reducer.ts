import { Action } from '@ngrx/store';
import { Prediction } from '.';
import { PredictActions, PredictActionTypes } from '../actions';


export const initialState: Prediction[] = [];

export function reducer(state = initialState, action: PredictActions): Prediction[] {
  switch (action.type) {
    case PredictActionTypes.LoadPredictionSuccess:
      return [action.prediction, ...state];
    case PredictActionTypes.RemovePrediction:
      return state.filter(f => f !== action.prediction);
    default:
      return state;
  }
}
