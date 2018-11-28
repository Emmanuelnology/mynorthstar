import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progress-arc',
    templateUrl: './progress-arc.component.html',
    styleUrls: ['./progress-arc.component.scss']
})
export class ProgressArcComponent implements OnInit {
    @Input() score: number;
    @Input() color: string;
    constructor() { }

    ngOnInit() {
        // this.score = 7.6;
    }

}
