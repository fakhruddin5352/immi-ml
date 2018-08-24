import { Component, OnInit } from '@angular/core';
import {UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry, UploadFile} from 'ngx-file-drop';
import { Store } from '@ngrx/store';
import { AddFileAction } from './actions';
import { FileInfo } from './models/file-info';

@Component({
  selector: 'immi-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  constructor(public store: Store<any>) { }

  ngOnInit() {
  }

  fileDropped(file: FileInfo) {
    this.store.dispatch(new AddFileAction(file));
  }

}
