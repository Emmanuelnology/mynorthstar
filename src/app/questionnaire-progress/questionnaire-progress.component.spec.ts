import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireProgressComponent } from './questionnaire-progress.component';

describe('QuestionnaireProgressComponent', () => {
  let component: QuestionnaireProgressComponent;
  let fixture: ComponentFixture<QuestionnaireProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionnaireProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
