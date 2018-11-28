"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var fire_base_test_display_component_1 = require("./fire-base-test-display.component");
describe('FireBaseTestDisplayComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [fire_base_test_display_component_1.FireBaseTestDisplayComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(fire_base_test_display_component_1.FireBaseTestDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
