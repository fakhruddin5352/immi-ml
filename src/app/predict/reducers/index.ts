import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPredictions from './predictions.reducer';


export const reducers: ActionReducerMap<fromPredictions.Predict> = {
  predictions: fromPredictions.reducer,
};

export {Predict, Prediction, PredictionPercentage} from './predictions.reducer';

const getPredictFeatureState = createFeatureSelector<fromPredictions.Predict>('predict');
export const getPredictions = createSelector(getPredictFeatureState, state => state.predictions);

export const metaReducers: MetaReducer<fromPredictions.Predict>[] = !environment.production ? [] : [];
