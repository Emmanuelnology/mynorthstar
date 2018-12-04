import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileOptionsComponent } from './user-profile-options.component';

describe('UserProfileOptionsComponent', () => {
  let component: UserProfileOptionsComponent;
  let fixture: ComponentFixture<UserProfileOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
