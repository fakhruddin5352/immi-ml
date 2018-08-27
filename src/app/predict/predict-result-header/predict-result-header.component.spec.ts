import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictResultHeaderComponent } from './predict-result-header.component';

describe('PredictResultHeaderComponent', () => {
  let component: PredictResultHeaderComponent;
  let fixture: ComponentFixture<PredictResultHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictResultHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictResultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
