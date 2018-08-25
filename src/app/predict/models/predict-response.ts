import { PredictionProbability } from './prediction-probability';

export interface PredictResponse {
    success?: boolean;
    predictions?: {[name: string]: PredictionProbability[]};
    progress?: number;
    done?: boolean;
}
