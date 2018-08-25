import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PredictService } from './predict.service';
import { AddFileAction, PredictActionTypes, LoadPredictionFailedAction, LoadPredictionSuccessAction, LoadPredictionAction, ProgressPredictionAction } from './actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { PredictResponse } from './models/predict-response';
import { of, concat, Observable } from 'rxjs';


@Injectable()
export class PredictEffects {

  constructor(private actions$: Actions, private predictService: PredictService) { }

  @Effect()
  predict$ = this.actions$.pipe(
    ofType(PredictActionTypes.LoadPrediction),
    mergeMap((action: LoadPredictionAction) => concat(
      of(new AddFileAction(action.id, action.color, action.file)),
      this.predictService.predict(action.file).pipe(
        map((response: PredictResponse) => {
          if (response.done) {
            return response.success ? (new LoadPredictionSuccessAction(action.id,
              response.predictions[action.file.name].map(p => ({ label: p.label, percentage: p.probability })),

            )) : (new LoadPredictionFailedAction(action.id, 'Server failed to predict'));
          }
          return new ProgressPredictionAction(action.id, response.progress);
        }

        ),
        catchError(e => of(new LoadPredictionFailedAction(action.id, e)))
      )),
    ));
}
