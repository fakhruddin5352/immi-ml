import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictResultPreviewComponent } from './predict-result-preview.component';

describe('PredictResultPreviewComponent', () => {
  let component: PredictResultPreviewComponent;
  let fixture: ComponentFixture<PredictResultPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictResultPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictResultPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
