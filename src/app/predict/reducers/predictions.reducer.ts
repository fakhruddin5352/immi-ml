import { Action } from '@ngrx/store';
import { Prediction } from '.';
import { PredictActions, PredictActionTypes } from '../actions';


export const initialState: Prediction[] = [];

export function reducer(state = initialState, action: PredictActions): Prediction[] {
  switch (action.type) {
    case PredictActionTypes.AddFile:
      return [{
        file: action.file,
        color: action.color,
        name: action.file.name,
        progress: 0,
        percentages: [],
        id: action.id
      }, ...state];
    case PredictActionTypes.ProgressPrediction:
      return state.map(prediction => {
        if (prediction.id === action.id) {
          return ({ ...prediction, progress: action.progress });
        }
        return prediction;
      });
    case PredictActionTypes.LoadPredictionSuccess:
      return state.map(prediction => {
        if (prediction.id === action.id) {
          return ({ ...prediction, percentages: action.percentages });
        }
        return prediction;
      });
    case PredictActionTypes.RemovePrediction:
      return state.filter(prediction => prediction.id !== action.id);
    default:
      return state;
  }
}
