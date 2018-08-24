import { PredictionProbability } from './prediction-probability';

export interface PredictResponse {
    predictions: {[name: string]: PredictionProbability[]};
}
