"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var progress_arc_component_1 = require("./progress-arc.component");
describe('ProgressArcComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [progress_arc_component_1.ProgressArcComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(progress_arc_component_1.ProgressArcComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
