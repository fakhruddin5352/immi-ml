import { Injectable } from '@angular/core';
import { FileSystemFileEntry, UploadFile } from 'ngx-file-drop';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Predict, Prediction } from './reducers';
import { PredictResponse } from './models/predict-response';
import { FileInfo } from './models/file-info';

@Injectable()
export class PredictService {

  constructor(private http: HttpClient) { }

  public predict(...files: FileInfo[]): Observable<PredictResponse> {
    const formData: FormData = new FormData();
    files.map(file => formData.append(file.name, file.file, file.relativePath));
    return this.http.post<PredictResponse>(`${environment.apiHost}/predict`, formData);
  }
}
