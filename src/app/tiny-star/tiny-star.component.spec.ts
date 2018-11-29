import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TinyStarComponent } from './tiny-star.component';

describe('TinyStarComponent', () => {
  let component: TinyStarComponent;
  let fixture: ComponentFixture<TinyStarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TinyStarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TinyStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
