import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireBaseTestDisplayComponent } from './fire-base-test-display.component';

describe('FireBaseTestDisplayComponent', () => {
  let component: FireBaseTestDisplayComponent;
  let fixture: ComponentFixture<FireBaseTestDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireBaseTestDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireBaseTestDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
