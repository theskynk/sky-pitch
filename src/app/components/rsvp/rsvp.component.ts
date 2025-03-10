import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class RsvpComponent {
  rsvpLocation = 'https://forms.gle/fvLF4zxUaETUbJJd9';
  rsvpText = 'Join us for a night of celebration!';
  rsvpSubtext = 'Give us your response!';
  rsvpButtonText = 'Submit';
  formSubmitSuccess = false;
  formError = false;
  formErrorMessage = '';

  name = new FormControl('', Validators.required);
  attending = new FormControl('', Validators.required);
  guests = new FormControl('');

  constructor(private http: HttpClient) {}

  handleSelectionChange(event: any) {
    console.log('Selection changed:', event);
  }

  submitRsvp() {
    if (this.name.invalid || this.attending.invalid) {
      this.formErrorMessage = 'Please fill out all required fields.';
      this.formError = true;
      return;
    } else {
      this.formError = false;
    }

    const name = this.name.value;
    const attending = this.attending.value === 'yes' ? true : false;
    const guests = this.guests.value || 0;

    const rsvpData = {
      name,
      attending,
      guests,
    };

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    this.http
      .post('https://jals6vahs6.execute-api.ap-southeast-1.amazonaws.com/default/weddingGuest', rsvpData, { headers })

      .subscribe({
        next: (response) => {
          this.rsvpSubtext = "We've received your response.";
          this.formSubmitSuccess = true;
          console.log('Success!', response);
        },
        error: (error) => {
          this.formErrorMessage =
            "There is something worng, it's on us. Please try again.";
          this.formError = true;
          console.error('Error details:', {
            status: error.status,
            statusText: error.statusText,
            error: error.error,
            headers: error.headers,
          });
        },
      });
  }
}
