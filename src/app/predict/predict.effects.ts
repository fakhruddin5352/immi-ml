import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PredictService } from './predict.service';
import { AddFileAction, PredictActionTypes, LoadPredictionFailedAction, LoadPredictionSuccessAction } from './actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { PredictResponse } from './models/predict-response';
import { of } from 'rxjs';


@Injectable()
export class PredictEffects {

  constructor(private actions$: Actions, private predictService: PredictService) { }

  @Effect()
  predict$ = this.actions$.pipe(
    ofType(PredictActionTypes.AddFile),
    mergeMap((action: AddFileAction) => this.predictService.predict(action.file).pipe(
      map((response: PredictResponse) => response.success ? (new LoadPredictionSuccessAction({
        file: action.file,
        name: action.file.name,
        percentages: response.predictions[action.file.name].map(p => ({ label: p.label, percentage: p.probability })),
        progress: 0
      })) : (new LoadPredictionFailedAction('Server failed to predict'))
      ),
      catchError(e => of(new LoadPredictionFailedAction(e)))
    ),
    ));
}
