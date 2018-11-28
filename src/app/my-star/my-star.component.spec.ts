import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStarComponent } from './my-star.component';

describe('ResultsComponent', () => {
  let component: MyStarComponent;
  let fixture: ComponentFixture<MyStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
