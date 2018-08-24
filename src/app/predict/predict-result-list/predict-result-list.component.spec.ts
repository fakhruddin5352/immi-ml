import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictResultListComponent } from './predict-result-list.component';

describe('PredictResultListComponent', () => {
  let component: PredictResultListComponent;
  let fixture: ComponentFixture<PredictResultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictResultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
