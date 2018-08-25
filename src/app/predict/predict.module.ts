import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictComponent } from './predict.component';
import { FileDropModule } from 'ngx-file-drop';
import { PredictService } from './predict.service';
import { PredictDropComponent } from './predict-drop/predict-drop.component';
import { PredictResultComponent } from './predict-result/predict-result.component';
import { PredictResultListComponent } from './predict-result-list/predict-result-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromPredict from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PredictEffects } from './predict.effects';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FileDropModule,
    StoreModule.forFeature('predict', fromPredict.reducers, { metaReducers: fromPredict.metaReducers }),
    EffectsModule.forFeature([PredictEffects]),
    ChartsModule,
    NgbModule
  ],
  exports: [PredictComponent],
  declarations: [PredictComponent, PredictDropComponent, PredictResultComponent, PredictResultListComponent],
  providers: [PredictService]
})
export class PredictModule { }
