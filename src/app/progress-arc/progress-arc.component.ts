import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progress-arc',
    templateUrl: './progress-arc.component.html',
    styleUrls: ['./progress-arc.component.scss']
})
export class ProgressArcComponent implements OnInit {
    @Input() score: number;
    @Input() color: string;
    @Input() size = 100;
    fontSize: string;
    constructor() {

    }

    ngOnInit() {
        this.fontSize = this.size * 0.24 + 'px';
    }

}
