import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingActiveComponent } from './training-active.component';

describe('TrainingActiveComponent', () => {
  let component: TrainingActiveComponent;
  let fixture: ComponentFixture<TrainingActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
