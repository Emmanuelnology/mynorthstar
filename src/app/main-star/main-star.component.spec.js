"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var main_star_component_1 = require("./main-star.component");
describe('MainStarComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [main_star_component_1.MainStarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(main_star_component_1.MainStarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
