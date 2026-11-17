import {Component, OnInit} from '@angular/core';
import {ReferenciasMaterialModule} from '../../../shared/modulos/referencias-material.module';
import {FormsModule, NgModel} from '@angular/forms';
import {ColumnMode, NgxDatatableModule, SelectionType} from '@swimlane/ngx-datatable';
import {Seleccion} from '../../../shared/entidades/Seleccion';
import {SeleccionService} from '../../../core/servicios/seleccion.service';
import {MatDialog} from '@angular/material/dialog';
import {SeleccionEditarComponente} from '../seleccion-editar-componente/seleccion-editar-componente';
import {NgFor} from '@angular/common';
import {DecidirComponente} from '../../../shared/Componentes/decidir-componente/decidir-componente';

@Component({
  selector: 'app-seleccion-componente',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
    NgFor
  ],
  templateUrl: './seleccion-componente.html',
  styleUrl: './seleccion-componente.css',
})
export class SeleccionComponente implements OnInit {

  public selecciones: Seleccion[] = [];
  public seleccionEscogida: Seleccion | undefined;
  private indiceSeleccionEscogida: number = -1;


  public textoBusqueda: string = "";
  public indiceBusqueda: number = 0;
  public opcionesBusqueda: string[] = ["--Elija Dato de Búsqueda--", "Nombre", "Entidad regente del Fútbol"];

  public columnas = [
    {name: "Nombre", prop: "nombre"},
    {name: "Entidad", prop: "entidad"}
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private seleccionServicio: SeleccionService,
              private dialogoServicio: MatDialog) {

  }

  ngOnInit() {
    this.listar();
  }

  public listar() {
    this.seleccionServicio.listar().subscribe({
        next: respuesta => {
          this.selecciones = respuesta;
        },
        error: error => {
          window.alert(error.mesagge);
        }
      }
    );
  }

  public escoger(event: any) {
    if (event.type == "click") {
      this.seleccionEscogida = event.row;
      this.indiceSeleccionEscogida = this.selecciones.findIndex(seleccion => seleccion == this.seleccionEscogida);
    }
  }

  public buscar() {
    if (this.textoBusqueda.length == 0) {
      this.listar();
    } else {
      this.seleccionServicio.buscar(this.indiceBusqueda, this.textoBusqueda).subscribe({
          next: respuesta => {
            this.selecciones = respuesta;
          },
          error: error => {
            window.alert(error.mesagge);
          }
        }
      );
    }
  }

  public agregar() {
    const dialogoAgregar = this.dialogoServicio.open(SeleccionEditarComponente, {
        width: '500px',
        height: '300px',
        data: {
          encabezado: "Agregando nueva selección",
          seleccion: {
            id: 0, nombre: "", entidad: ""
          }
        },
        disableClose: true
      }
    );
    dialogoAgregar.afterClosed().subscribe({
      next: datos => {
        if (datos) {
          this.seleccionServicio.agregar(datos.seleccion).subscribe({
            next: respuesta => {
              this.seleccionServicio.buscar(1, respuesta.nombre).subscribe({
                  next: respuesta => {
                    this.selecciones = respuesta;
                  },
                  error: error => {
                    window.alert(error.mesagge);
                  }
                }
              );
            }
          });
        }
      }
    })
  }

  public modificar() {
    if (this.seleccionEscogida) {
      const dialogoModificar = this.dialogoServicio.open(SeleccionEditarComponente, {
          width: '500px',
          height: '300px',
          data: {
            encabezado: `Editando la selección [${this.seleccionEscogida.nombre}]`,
            seleccion: {...this.seleccionEscogida}
          },
          disableClose: true
        }
      );
      dialogoModificar.afterClosed().subscribe({
        next: datos => {
          if (datos) {
            this.seleccionServicio.modificar(datos.seleccion).subscribe({
              next: respuesta => {
                this.selecciones[this.indiceSeleccionEscogida] = respuesta;
              },
              error: error => {
                window.alert(error.message());
              }
            });
          }
        }
      })
    } else {
      window.alert("Debe escoger una Selección");
    }
  }

  public eliminar() {
    if (this.seleccionEscogida) {
      const dialogoEliminar = this.dialogoServicio.open(DecidirComponente, {
          width: '400px',
          height: '200px',
          data: {
            encabezado: `Está seguro de eliminar la selección [${this.seleccionEscogida.nombre}] ?`,
            id: this.seleccionEscogida.id
          },
          disableClose: true
        }
      );
      dialogoEliminar.afterClosed().subscribe({
        next: datos => {
          if (datos) {
            this.seleccionServicio.eliminar(datos.id).subscribe({
              next: respuesta => {
                this.listar();
              },
              error: error => {
                if (error.status == 404) {
                  window.alert("No se puede eliminar la Selección");
                }
              }
            });
          }
        }
      })
    } else {
      window.alert("Debe escoger una Selección");
    }
  }
}
