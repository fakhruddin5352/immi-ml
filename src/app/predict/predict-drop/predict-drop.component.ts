import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileSystemFileEntry, FileSystemDirectoryEntry, UploadEvent, UploadFile } from 'ngx-file-drop';
import { FileInfo } from '../models/file-info';

@Component({
  selector: 'immi-predict-drop',
  templateUrl: './predict-drop.component.html',
  styleUrls: ['./predict-drop.component.css']
})
export class PredictDropComponent implements OnInit {

  @Output()  fileDropped = new EventEmitter<FileInfo>();

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          this.fileDropped.emit({
            file: file,
            name: fileEntry.name,
            relativePath: droppedFile.relativePath
          });
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
      }
    }
  }

  public fileOver(event) {

  }

  public fileLeave(event) {

  }


}
