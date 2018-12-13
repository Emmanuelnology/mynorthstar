import { Component, OnInit, Input } from '@angular/core';
import { IQuestion, Randomise, QuestionnaireService, FirebaseForQuestionnaire } from '../services/questionnaire.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
    selector: 'app-questionnaire',
    templateUrl: './questionnaire.component.html',
    styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
    environment = environment;
    downloadQuestions: IQuestion;
    questions = [];
    ready = false;
    disabledButton = true;
    // paginationComponent: PaginationComponent;
    questionnaireFromFirebase: Observable<any[]>;
    number;

    constructor(
        private rand: Randomise,
        private questionnaireService: QuestionnaireService,
        private router: Router,
        afs: AngularFirestore,
        private uploadToFirebase: FirebaseForQuestionnaire,
        // private paginationComponent: PaginationComponent
        ) {

    }

    ngOnInit() {
        this.getQuestions();
        // this.questions = this.paginationComponent.createPages(this.questions);
        // console.log("Hello - ",this.paginationComponent.x);
    }

    randomiseAnswers() {
        for (const question of this.questions) {
            question.score = Math.floor(Math.random() * 11);
        }
        this.blobClick();
    }

    blobClick () {
        const numberAnswered: number[] = [];
        for (const index of this.questions) {
            if (this.questions[index.score] != null) {
                numberAnswered.push(1);
            }
        }
        this.number = numberAnswered.length;
        this.enableSendButton(this.number);
        // return console.log(numberAnswered.length);
    }

    enableSendButton(answered) {
        if (answered === this.questions.length) {
            this.disabledButton = false;
        }
    }


    getQuestions() {
       this.uploadToFirebase.getAllQuestions().subscribe((questions) => {
        this.questions = this.rand.randomiseOrder(questions);
        // this.questions = this.paginationComponent.createPages(questions);

            // console.log('Questions:', questions[0].score);
            // this.onQuestionUpdate(questions);


       // this.ready = true;

       this.ready = true;
        console.log('Questions:', questions);

       });
    }

    getSliderColor(value) {
        if (value == null) {
            return '#101f34';
            // return 'white';
        }
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
                console.error(error);
            });
    }
}
