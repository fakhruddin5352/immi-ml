import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictResultGraphComponent } from './predict-result-graph.component';

describe('PredictResultGraphComponent', () => {
  let component: PredictResultGraphComponent;
  let fixture: ComponentFixture<PredictResultGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictResultGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictResultGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
