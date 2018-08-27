import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FileInfo } from '../models/file-info';

@Component({
  selector: 'immi-predict-result-preview',
  templateUrl: './predict-result-preview.component.html',
  styleUrls: ['./predict-result-preview.component.css']
})
export class PredictResultPreviewComponent implements OnInit {

  @Input() file: FileInfo;

  imageUrl = '';
  reader = new FileReader();

  constructor() { }

  ngOnInit() {
    this.reader.addEventListener('load', () => {
      this.imageUrl = this.reader.result as string;
    }, false);
    this.reader.readAsDataURL(this.file.file);


  }

}
