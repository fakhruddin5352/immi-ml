import { Injectable } from '@angular/core';
import { FileSystemFileEntry, UploadFile } from 'ngx-file-drop';
import { HttpClient, HttpHeaders, HttpEventType, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Predict, Prediction } from './reducers';
import { PredictResponse } from './models/predict-response';
import { FileInfo } from './models/file-info';
import { map, filter } from 'rxjs/operators';
import { HttpUploadProgressEvent, HttpDownloadProgressEvent } from '@angular/common/http/src/response';

@Injectable()
export class PredictService {

  constructor(private http: HttpClient) { }

  percent(loaded, total, max): number {
    return Math.min(((loaded / Math.max(total, 1)) * max), max);
  }
  public predict(...files: FileInfo[]): Observable<PredictResponse> {
    const url = `${environment.apiHost}/predict`;

    const formData: FormData = new FormData();
    files.map(file => formData.append(file.name, file.file, file.relativePath));


    return this.http.post(url, formData, { observe: 'events', reportProgress: true })
      .pipe(
        filter((event: HttpEvent<any>) => (event.type === HttpEventType.Response ||
          event.type === HttpEventType.DownloadProgress ||
          event.type === HttpEventType.UploadProgress ||
          event.type === HttpEventType.Sent)),
        map((event: HttpEvent<any>) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            return { progress: 0, done: false };
          } if (event.type === HttpEventType.DownloadProgress) {
            const progress = event as HttpDownloadProgressEvent;
            return { progress: 50 + this.percent(event.loaded, event.total, 50), done: false };
          } else if (event.type === HttpEventType.UploadProgress) {
            const progress = event as HttpUploadProgressEvent;
            return { progress: this.percent(event.loaded, event.total, 50), done: false };
          } else if (event.type === HttpEventType.Response) {
            const response = event as HttpResponse<PredictResponse>;
            response.body.done = true;
            response.body.progress = 100;
            return response.body;
          }
        }));
  }
}
