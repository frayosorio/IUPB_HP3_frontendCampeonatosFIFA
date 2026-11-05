import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReferenciasMaterialModule} from '../shared/modulos/referencias-material.module';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ReferenciasMaterialModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CampeonatosFIFA');
}
