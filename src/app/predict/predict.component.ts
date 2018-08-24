import { Component, OnInit } from '@angular/core';
import {UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry, UploadFile} from 'ngx-file-drop';
import { Store, select } from '@ngrx/store';
import { AddFileAction, RemovePredictionAction } from './actions';
import { FileInfo } from './models/file-info';
import { getPredictions, Prediction } from './reducers';

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

  closePrediction(prediction: Prediction) {
    this.store.dispatch(new RemovePredictionAction(prediction));
  }
  fileDropped(file: FileInfo) {
    this.store.dispatch(new AddFileAction(file));
  }

}
