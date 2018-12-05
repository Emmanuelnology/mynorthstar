
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-progress',
  templateUrl: './questionnaire-progress.component.html',
  styleUrls: ['./questionnaire-progress.component.scss']
})
export class QuestionnaireProgressComponent implements OnInit {

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
