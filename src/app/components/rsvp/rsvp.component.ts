import { Component } from '@angular/core';

@Component({
  selector: 'app-rsvp',
  imports: [],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss'
})
export class RsvpComponent {

  rsvpLocation = 'https://forms.gle/fvLF4zxUaETUbJJd9';
  rsvpText = 'Join us for a night of celebration!';
  // rsvpSubtext = 'Please RSVP by 12/31/2021';
  rsvpButtonText = 'Give us your response!';

  gotoRsvp() {
    window.location.href = this.rsvpLocation;
  }
}
