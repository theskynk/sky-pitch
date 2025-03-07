import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  imports: [CommonModule],
})
export class CountdownComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  countdownTitle: string = 'Time Remaining';
  months: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private targetDate: Date = new Date('2025-10-25 00:00:00+07:00');

  ngOnInit() {
    this.subscription = interval(1000).subscribe(() => {
      this.calculateTimeRemaining();
    });
  }

  private calculateTimeRemaining() {
    const now = moment();
    const target = moment(this.targetDate);
    const difference = target.diff(now);

    if (difference > 0) {
      const duration = moment.duration(difference);

      this.months = duration.months();
      this.days = duration.days();
      this.hours = duration.hours();
      this.minutes = duration.minutes();
      this.seconds = duration.seconds();
    } else {
      // If target date is reached
      this.months = 0;
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.subscription?.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
