import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictDropComponent } from './predict-drop.component';

describe('PredictDropComponent', () => {
  let component: PredictDropComponent;
  let fixture: ComponentFixture<PredictDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
