import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-arc',
    templateUrl: './progress-arc.component.html',
    styleUrls: ['./progress-arc.component.scss']
})
export class ProgressArcComponent implements OnInit {
    score: number;
    constructor() { }

    ngOnInit() {
        this.score = 7.6;
    }

}
