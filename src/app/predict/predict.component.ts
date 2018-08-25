import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddFileAction, RemovePredictionAction, LoadPredictionAction } from './actions';
import { FileInfo } from './models/file-info';
import { getPredictions, Prediction } from './reducers';
import { takeLast, tap, take } from 'rxjs/operators';

export const yellow = '#efffff';
export const blue = '#ffffef';

@Component({
  selector: 'immi-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  predictions$ = this.store.pipe(select(getPredictions));

  constructor(public store: Store<any>) { }


  ngOnInit() {
  }

  closePrediction(id: number) {
    this.store.dispatch(new RemovePredictionAction(id));
  }
  fileDropped(file: FileInfo) {
    this.predictions$.pipe(take(1)).subscribe(predictions => {
      const currentMax = predictions.reduce((pre, cur) => cur.id > pre.id ? cur : pre, { id: 0, color: yellow });
      const id = currentMax.id + 1;
      const color = currentMax.color === yellow ? blue : yellow;
      this.store.dispatch(new LoadPredictionAction(id, color, file));
    });
  }

}
