import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, Randomise, QuestionnaireService, UploadToFirebase } from '../services/questionnaire.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
    downloadQuestions: IQuestion;
    questions = [];

    questionnaireFromFirebase: Observable<any[]>;
    number = 0;
    constructor(
        private rand: Randomise,
        private questionnaireService: QuestionnaireService,
        private router: Router,
        afs: AngularFirestore,
        private uploadToFirebase: UploadToFirebase
    ) {

    }


    ngOnInit() {
        this.getQuestions();
    }

    blobClick () {
        if (this.number < 6) {
            return this.number++;
        }

    }

    getQuestions() {
       this.uploadToFirebase.getAllQuestions().subscribe((questions) => {
        this.questions = this.rand.randomiseOrder(questions);
            console.log('HI', questions);
       });
    }


    getSliderColor(value) {
        if (value <= 2) {
            const blue =  129 + 31.5 * value;
            return 'rgb(236, 0, ' + blue + ')';
        } if (value <= 6 && value > 2) {
            const red = 236 - (value - 3) * 59;
            return 'rgb(' + red + ', 0, 255)';
        } if (value > 6) {
            const green = 61.9 * value - 364;
            return 'rgb(0, ' + green + ', 210)';
        }
    }

    onSubmit() {

        const results = this.questionnaireService.getResults(this.questions);
        this.uploadToFirebase.upload(results)
            .then(() => {
                this.router.navigate(['/']);
                console.log(results);
            })
            .catch((error) => {
                // display error message
            });
    }



}
