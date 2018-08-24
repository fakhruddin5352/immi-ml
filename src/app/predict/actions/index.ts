import { Action } from '@ngrx/store';
import { FileSystemFileEntry, UploadFile } from 'ngx-file-drop';
import { Prediction } from '../reducers';
import { FileInfo } from '../models/file-info';

export enum PredictActionTypes {
    AddFile = '[Predict] AddFile',
    LoadPredictionSuccess = '[Predict] LoadPredictionSuccess',
    LoadPredictionFailed = '[Predict] LoadPredictionFailed',
    RemovePrediction = '[Predict] RemovePrediction'
}
export class AddFileAction implements Action {
    readonly type = PredictActionTypes.AddFile;

    constructor(public file: FileInfo) {

    }
}

export class LoadPredictionSuccessAction implements Action {
    readonly type = PredictActionTypes.LoadPredictionSuccess;

    constructor(public prediction: Prediction) {

    }
}

export class LoadPredictionFailedAction implements Action {
    readonly type = PredictActionTypes.LoadPredictionFailed;

    constructor(public error: string) {

    }
}

export class RemovePredictionAction implements Action {
    readonly type = PredictActionTypes.RemovePrediction;

    constructor(public prediction: Prediction) {

    }
}

export type PredictActions = AddFileAction | LoadPredictionSuccessAction | LoadPredictionFailedAction | RemovePredictionAction;

