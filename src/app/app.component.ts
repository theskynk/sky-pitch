import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StageComponent } from './components/stage/stage.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CommonModule } from '@angular/common';
import { RsvpComponent } from "./components/rsvp/rsvp.component";
import { CountdownComponent } from "./components/countdown/countdown.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, StageComponent, AgendaComponent, RsvpComponent, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sky-pitch :3';
}
