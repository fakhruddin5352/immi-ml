import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromPredictions from './predictions.reducer';
import { FileInfo } from '../models/file-info';

export interface PredictionPercentage {
  label: string;
  percentage: number;
}
export interface Prediction {
  name: string;
  percentages: PredictionPercentage[];
  progress: number;
  file: FileInfo;
}
export interface Predict {
  predictions: Prediction[];
}

export const reducers: ActionReducerMap<Predict> = {
  predictions: fromPredictions.reducer,
};

const getPredictFeatureState = createFeatureSelector<Predict>('predict');
export const getPredictions = createSelector(getPredictFeatureState, state => state.predictions);

export const metaReducers: MetaReducer<Predict>[] = !environment.production ? [] : [];
