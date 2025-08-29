import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StageComponent } from './components/stage/stage.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { RsvpComponent } from './components/rsvp/rsvp.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { VenueComponent } from './components/venue/venue.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StageComponent,
    AgendaComponent,
    RsvpComponent,
    VenueComponent,
    CountdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
