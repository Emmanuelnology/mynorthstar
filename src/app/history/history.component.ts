import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FirebaseForQuestionnaire } from '../services/questionnaire.service';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {

  user;
  recentHistory: Subscription;
  @Output() checked = new EventEmitter <number[]>();

  public pastDataProfile = [];

  public findActive() {
    const activeIndex: number[] = [];
    for (const index in this.pastDataProfile) {
      if (this.pastDataProfile[index].isActive) {
        activeIndex.push(parseInt(index, 10));
      }
    }
    this.checked.emit(activeIndex);
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private firebase: FirebaseForQuestionnaire) {
    this.user = this.authService.user;
  }

  ngOnDestroy() {
    this.recentHistory.unsubscribe();
  }

  ngOnInit() {
    this.recentHistory = this.firebase.getRecent(this.user, 6).subscribe((results) => {
      if (results.length > 0) {
        results.shift();
        for (const index in results) {
          if (results.hasOwnProperty(index)) {
            this.pastDataProfile.push({date: results[index].date, score: results[index].overallResult, isActive: false});
          }
        }
      } else {
        this.router.navigate(['/questionnaire']);
      }
    });
  }

}
