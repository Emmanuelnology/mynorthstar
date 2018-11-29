import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStarComponent } from './compare-star.component';

describe('CompareStarComponent', () => {
  let component: CompareStarComponent;
  let fixture: ComponentFixture<CompareStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
