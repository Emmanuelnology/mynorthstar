import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStarComponent } from './main-star.component';

describe('MainStarComponent', () => {
  let component: MainStarComponent;
  let fixture: ComponentFixture<MainStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
