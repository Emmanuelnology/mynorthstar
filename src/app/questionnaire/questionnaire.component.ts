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
    ready = false;

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
        if (this.number < 30) {
            return this.number++;
        }

    }

    getQuestions() {
       this.uploadToFirebase.getAllQuestions().subscribe((questions) => {
        this.questions = this.rand.randomiseOrder(questions);
       this.ready = true;
        console.log('Questions:', questions);
       });
    }

    getSliderColor(value) {
        if (value <= 3) {
            return 'rgb(236, 0, 129)';
        } if (value <= 7 && value > 3) {
            return 'rgb(50, 152, 228)';
        } if (value > 7) {
            return 'rgb(0, 255, 210)';
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
