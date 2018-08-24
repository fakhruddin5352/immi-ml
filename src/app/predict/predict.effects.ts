import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PredictService } from './predict.service';
import { AddFileAction, PredictActionTypes, LoadPredictionFailed, LoadPredictionSuccessAction } from './actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { PredictResponse } from './models/predict-response';
import { of } from 'rxjs';


@Injectable()
export class PredictEffects {

  constructor(private actions$: Actions, private predictService: PredictService) { }

  @Effect()
  predict$ = this.actions$.pipe(
    ofType(PredictActionTypes.AddFile),
    tap((action: AddFileAction) => console.log(action.file.file) ),
    mergeMap((action: AddFileAction) => this.predictService.predict(action.file).pipe(
      tap(response => console.log(JSON.stringify(response))),
      map((response: PredictResponse) => (new LoadPredictionSuccessAction({
        file: action.file,
        name: action.file.name,
        percentages: response.predictions[action.file.name].map(p => ({ label: p.label, percentage: p.probability })),
        progress: 0
      }))
      ),
      catchError(e => of(new LoadPredictionFailed(e)))
    ),
    ));
}
