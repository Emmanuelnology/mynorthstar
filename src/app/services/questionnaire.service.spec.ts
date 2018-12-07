import { TestBed } from '@angular/core/testing';

import { QuestionnaireService } from './questionnaire.service';

describe('QuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionnaireService = TestBed.get(QuestionnaireService);
    expect(service).toBeTruthy();
  });
});


// exampleQuestions taken from the import
// To bring back do import { QuestionnaireService, exampleQuestions } from './questionnaire.service';
// describe('getResults', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));
//   it('should equal x when passed y', () => {
//     const service: QuestionnaireService = TestBed.get(QuestionnaireService);
//     expect(service.getResults(exampleQuestions)).toBe({
//     });
//   });
// });
