import { Component, signal } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {ReferenciasMaterialModule} from '../shared/modulos/referencias-material.module';
import {NgForm} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, RouterModule,
    ReferenciasMaterialModule,
    NgFor
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CampeonatosFIFA');

  public opciones = [
    { titulo: 'Selecciones', url: 'selecciones', icono: 'iconos/Seleccion.png' },
    { titulo: 'Campeonatos', url: 'campeonatos', icono: 'iconos/Campeonato.png' },
    { titulo: 'Grupos', url: 'grupos', icono: 'iconos/Grupo.png' },
    { titulo: 'Encuentros', url: 'encuentros', icono: 'iconos/Encuentro.png' },
    { titulo: 'Ciudades', url: 'ciudades', icono: 'iconos/Ciudad.png' },
    { titulo: 'Estadios', url: 'estadios', icono: 'iconos/Estadio.png' },
  ];

}
