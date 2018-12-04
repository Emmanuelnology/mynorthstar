"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var form_validation_service_1 = require("./form-validation.service");
describe('FormValidationService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(form_validation_service_1.FormValidationService);
        expect(service).toBeTruthy();
    });
});
