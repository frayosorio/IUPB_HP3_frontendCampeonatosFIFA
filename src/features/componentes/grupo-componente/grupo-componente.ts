import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {GrupoServicio} from '../../../core/servicios/grupo.servicio';
import {CampeonatoServicio} from '../../../core/servicios/campeonato.servicio';
import {Campeonato} from '../../../shared/entidades/Campeonato';
import {Grupo} from '../../../shared/entidades/Grupo';
import {ColumnMode, NgxDatatableModule, SelectionType} from '@swimlane/ngx-datatable';
import {CommonModule} from '@angular/common';
import {ReferenciasMaterialModule} from '../../../shared/modulos/referencias-material.module';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-grupo-componente',
  imports: [
    CommonModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './grupo-componente.html',
  styleUrl: './grupo-componente.css',
})
export class GrupoComponente implements OnInit {

  public textoBusqueda: string = "";

  public grupos: Grupo[] = [];

  public columnas = [
    {name: "Nombre", prop: "nombre"},
    {name: "Paises", prop: "paises"}
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  public campeonatos: Campeonato[] = [];
  public campeonatoEscogido: Campeonato | undefined;

  public grupoEscogido: Grupo | undefined;
  public indiceGrupoEscogido: number = -1;


  constructor(private grupoServicio: GrupoServicio,
              private campeonatoServicio: CampeonatoServicio,
              //private seleccionServicio: SeleccionServicio,
              //private encuentroServicio: EncuentroServicio,
              public dialogServicio: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.listarCampeonatos();
  }

  escoger(event: any) {
    if (event.type == "click") {
      this.grupoEscogido = event.row;
      this.indiceGrupoEscogido = this.grupos.findIndex(grupo => grupo == this.grupoEscogido);
    }
  }

  public listarCampeonatos() {
    this.campeonatoServicio.listar().subscribe(
      {
        next: response => {
          this.campeonatos = response;
        },
        error: error => {
          window.alert(error.message);
        }
      }
    );
  }

  public listarGrupos() {
    if (this.campeonatoEscogido) {
      this.grupoServicio.listarCampeonato(this.campeonatoEscogido.id).subscribe(
        {
          next: response => {
            this.grupos = response;
            // Llamar a listarPaises por cada grupo
            for (let grupo of this.grupos) {
              this.grupoServicio.listarSelecciones(grupo.id).subscribe({
                next: paisesGrupo => {
                  grupo.paises = paisesGrupo.map(pg => pg.seleccion.nombre).join(", ");
                },
                error: error => {
                  console.error(`Error al listar países del grupo ${grupo.id}`, error);
                }
              });
            }
          },
          error: error => {
            window.alert(error);
          }
        }
      );
    }
  }

  agregar() {

  }

  modificar() {
  }

  eliminar() {
  }

}
