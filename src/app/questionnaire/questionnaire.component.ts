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
    downloadQuestions:IQuestion;
    // questions: IQuestion[] = [
    //     {
    //         title: 'Question 1',
    //         number: 1,
    //         question: 'I do not feel particularly pleased with the way I am',
    //         score: undefined,
    //         weight: 2,
    //         category: 'Happiness',
    //         positive: false
    //     },
    //     {
    //         title: 'Question 2',
    //         number: 2,
    //         question: 'I feel that life is very rewarding',
    //         score: undefined,
    //         weight: 5,
    //         category: 'Happiness',
    //         positive: true
    //     },
    //     {
    //         title: 'Question 3',
    //         number: 3,
    //         question: 'I rarely wake up feeling rested',
    //         score: undefined,
    //         weight: 5,
    //         category: 'Finance',
    //         positive: false
    //     },
    //     {
    //         title: 'Question 4',
    //         number: 4,
    //         question: 'I laugh a lot',
    //         score: undefined,
    //         weight: 2,
    //         category: 'Happiness',
    //         positive: true
    //     },
        // {
        //     title: 'Question 5',
        //     number: 5,
        //     question: 'I could handle a major unexpected expense',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Money',
        //     positive: true
        // },
        // {
        //     title: 'Question 6',
        //     number: 6,
        //     question: 'I can enjoy life because of the way I’m managing my money',
        //     score: undefined,
        //     weight: 2,
        //     category: 'Money',
        //     positive: true
        // },
        // {
        //     title: 'Question 7',
        //     number: 7,
        //     question: 'During your conversations, do you find yourself often defending your actions',
        //     score: undefined,
        //     weight: 6,
        //     category: 'Romance and relationships',
        //     positive: false
        // },
        // {
        //     title: 'Question 8',
        //     number: 8,
        //     question: 'In general, I am satisfied with my friendships',
        //     score: undefined,
        //     weight: 2,
        //     category: 'Romance and relationships',
        //     positive: true
        // },
        // {
        //     title: 'Question 9',
        //     number: 9,
        //     question: 'I wonder whether my friends really care about me',
        //     score: undefined,
        //     weight: 7,
        //     category: 'Romance and relationships',
        //     positive: false
        // },
        // {
        //     title: 'Question 10',
        //     number: 10,
        //     question: 'I regularly meet friends for social activities',
        //     score: undefined,
        //     weight: 7,
        //     category: 'Fun and recreation',
        //     positive: true
        // },
        // {
        //     title: 'Question 11',
        //     number: 11,
        //     question: 'I often do activities which leave me feeling happy',
        //     score: undefined,
        //     weight: 4,
        //     category: 'Fun and recreation',
        //     positive: true
        // },
        // {
        //     title: 'Question 12',
        //     number: 12,
        //     question: 'I play sport or do exercise regularly',
        //     score: undefined,
        //     weight: 1,
        //     category: 'Fun and recreation',
        //     positive: true
        // },
        // {
        //     title: 'Question 13',
        //     number: 13,
        //     question: 'I do not eat out everyday',
        //     score: undefined,
        //     weight: 2,
        //     category: 'Health and wellbeing',
        //     positive: false
        // },
        // {
        //     title: 'Question 14',
        //     number: 14,
        //     question: 'I eat healthy',
        //     score: undefined,
        //     weight: 4,
        //     category: 'Health and wellbeing',
        //     positive: true
        // },
        // {
        //     title: 'Question 15',
        //     number: 15,
        //     question: 'I do not believe in God',
        //     score: undefined,
        //     weight: 7,
        //     category: 'Spirituality',
        //     positive: false
        // },
        // {
        //     title: 'Question 16',
        //     number: 16,
        //     question: 'I frequently pray',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Spirituality',
        //     positive: true
        // },
        // {
        //     title: 'Question 17',
        //     number: 17,
        //     question: 'My faith gives me a feeling of security',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Spirituality',
        //     positive: true
        // },
        // {
        //     title: 'Question 18',
        //     number: 18,
        //     question: 'I feel confident that I can complete all my tasks',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Personal Growth',
        //     positive: true
        // },
        // {
        //     title: 'Question 19',
        //     number: 19,
        //     question: 'I am meeting my personal targets',
        //     score: undefined,
        //     weight: 3,
        //     category: 'Personal Growth',
        //     positive: true
        // },
        // {
        //     title: 'Question 20',
        //     number: 20,
        //     question: 'I frequently meet up with friends and family',
        //     score: undefined,
        //     weight: 6,
        //     category: 'Friends and family',
        //     positive: true
        // },
        // {
        //     title: 'Question 21',
        //     number: 21,
        //     question: 'I have a best friend',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Friends and family',
        //     positive: true
        // },
        // {
        //     title: 'Question 22',
        //     number: 22,
        //     question: 'I feel just as important as the rest of my family',
        //     score: undefined,
        //     weight: 5,
        //     category: 'Friends and family',
        //     positive: true
        // },
        // {
        //     title: 'Question 23',
        //     number: 23,
        //     question: 'I do not use Netflix',
        //     score: undefined,
        //     weight: 6,
        //     category: 'Home and Environment',
        //     positive: false
        // },
        // {
        //     title: 'Question 24',
        //     number: 24,
        //     question: 'I sometimes feel lonely',
        //     score: undefined,
        //     weight: 3,
        //     category: 'Home and Environment',
        //     positive: false
        // },
        // {
        //     title: 'Question 25',
        //     number: 25,
        //     question: 'I am responsible with my money',
        //     score: undefined,
        //     weight: 4,
        //     category: 'Money',
        //     positive: true
        // },
        // {
        //     title: 'Question 26',
        //     number: 26,
        //     question: 'I like meeting new people',
        //     score: undefined,
        //     weight: 6,
        //     category: 'Romance and relationships',
        //     positive: true
        // },
        // {
        //     title: 'Question 27',
        //     number: 27,
        //     question: 'I feel confident in my body',
        //     score: undefined,
        //     weight: 7,
        //     category: 'Fun and recreation',
        //     positive: true
        // },
        // {
        //     title: 'Question 28',
        //     number: 28,
        //     question: 'I take work failure well',
        //     score: undefined,
        //     weight: 4,
        //     category: 'Career',
        //     positive: true
        // },
        // {
        //     title: 'Question 29',
        //     number: 29,
        //     question: 'I feel physically healthy',
        //     score: undefined,
        //     weight: 2,
        //     category: 'Health and wellbeing',
        //     positive: true
        // },
        // {
        //     title: 'Question 30',
        //     number: 30,
        //     question: 'I love my job',
        //     score: undefined,
        //     weight: 2,
        //     category: 'Career',
        //     positive: true
        // }
    // ];

    // questionCollection: AngularFirestoreCollection<IQuestion>;
    questionnaireFromFirebase: Observable<any[]>;

    constructor(
        private rand: Randomise, 
        private questionnaireService: QuestionnaireService,
        private router: Router, 
        afs: AngularFirestore, 
        private uploadToFirebase: UploadToFirebase
    ) { 
    
            
        // this.downloadQuestions = this.get();
        // this.downloadQuestions = this.rand.randomiseOrder(this.downloadQuestions);
        this.questionnaireFromFirebase = afs.collection('questionnaire').valueChanges();
        console.log('hi', this.questionnaireFromFirebase)
    }


    ngOnInit() {

    }

    get() {
        const questionsFromQuestionnaire = this.uploadToFirebase.get();
        console.log("HI", questionsFromQuestionnaire)
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

        // const results = this.questionnaireService.getResults(this.questions);
        // this.uploadToFirebase.upload(results)
        //     .then(() => {
        //         this.router.navigate(['/']);
        //         console.log(results)
        //     })
        //     .catch((error) => {
        //         // display error message
        //     })
    }

}
