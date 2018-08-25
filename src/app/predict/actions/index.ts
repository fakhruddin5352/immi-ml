import { Action } from '@ngrx/store';
import { FileSystemFileEntry, UploadFile } from 'ngx-file-drop';
import { Prediction, PredictionPercentage } from '../reducers';
import { FileInfo } from '../models/file-info';
 
export enum PredictActionTypes {
    AddFile = '[Predict] AddFile',
    LoadPrediction = '[Predict] LoadPrediction',
    ProgressPrediction = '[Predict] ProgressPrediction',
    LoadPredictionSuccess = '[Predict] LoadPredictionSuccess',
    LoadPredictionFailed = '[Predict] LoadPredictionFailed',
    RemovePrediction = '[Predict] RemovePrediction'
}
export class AddFileAction implements Action {
    readonly type = PredictActionTypes.AddFile;

    constructor(public id: number, public color: string, public file: FileInfo) {

    }
}

export class LoadPredictionAction implements Action {
    readonly type = PredictActionTypes.LoadPrediction;

    constructor(public id: number, public color: string, public file: FileInfo) {
    }
}

export class ProgressPredictionAction implements Action {
    readonly type = PredictActionTypes.ProgressPrediction;

    constructor(public id: number, public progress: number) {
    }

}

export class LoadPredictionSuccessAction implements Action {
    readonly type = PredictActionTypes.LoadPredictionSuccess;

    constructor(public id: number, public percentages: PredictionPercentage[]) {

    }
}

export class LoadPredictionFailedAction implements Action {
    readonly type = PredictActionTypes.LoadPredictionFailed;

    constructor(public id: number, public error: string) {

    }
}

export class RemovePredictionAction implements Action {
    readonly type = PredictActionTypes.RemovePrediction;

    constructor(public id: number) {

    }
}

export type PredictActions = AddFileAction | LoadPredictionSuccessAction | LoadPredictionFailedAction | RemovePredictionAction
 | ProgressPredictionAction;

