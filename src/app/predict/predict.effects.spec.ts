import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PredictEffects } from './predict.effects';

describe('PredictEffects', () => {
  let actions$: Observable<any>;
  let effects: PredictEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PredictEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PredictEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
