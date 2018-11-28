import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressArcComponent } from './progress-arc.component';

describe('ProgressArcComponent', () => {
  let component: ProgressArcComponent;
  let fixture: ComponentFixture<ProgressArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
