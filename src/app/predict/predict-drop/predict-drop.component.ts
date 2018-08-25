import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FileInfo } from '../models/file-info';

import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'immi-predict-drop',
  templateUrl: './predict-drop.component.html',
  styleUrls: ['./predict-drop.component.css']
})
export class PredictDropComponent implements OnInit {
  files: File[] = [];
  faUpload = faUpload;
  validComboDrag = false;

  @Output() fileDropped = new EventEmitter<FileInfo>();

  constructor() { }

  ngOnInit() {
  }


  upload() {
    if (this.files.length) {
      this.fileDropped.emit({
        file: this.files[0],
        name: this.files[0].name,
        relativePath: this.files[0].name
      });
      this.files = [];
    }
  }

  public fileOver(event) {

  }

  public fileLeave(event) {

  }


}
