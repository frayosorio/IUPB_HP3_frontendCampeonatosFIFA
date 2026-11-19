import {Component} from '@angular/core';
import {Ciudad} from '../../../shared/entidades/Ciudad';
import {ColumnMode, NgxDatatableModule, SelectionType} from '@swimlane/ngx-datatable';
import {MatDialog} from '@angular/material/dialog';
import {CiudadEditarComponente} from '../ciudad-editar-componente/ciudad-editar-componente';
import {DecidirComponente} from '../../../shared/Componentes/decidir-componente/decidir-componente';
import {CiudadServicio} from '../../../core/servicios/ciudad.servicio';
import {ReferenciasMaterialModule} from '../../../shared/modulos/referencias-material.module';
import {FormsModule} from '@angular/forms';
import {SeleccionServicio} from '../../../core/servicios/seleccion.service';
import {Seleccion} from '../../../shared/entidades/Seleccion';

@Component({
  selector: 'app-ciudad-componente',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
  templateUrl: './ciudad-componente.html',
  styleUrl: './ciudad-componente.css',
})
export class CiudadComponente {

  public ciudades: Ciudad[] = [];
  public ciudadEscogida: Ciudad | undefined;
  private indiceCiudadEscogida: number = -1;

  public paises: Seleccion[] = [];

  public textoBusqueda: string = "";
  public indiceBusqueda: number = 0;
  public opcionesBusqueda: string[] = ["--Elija Dato de Búsqueda--", "Nombre"];

  public columnas = [
    {name: "Nombre", prop: "nombre"},
    {name: "País", prop: "pais.nombre"}
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;

  constructor(private ciudadServicio: CiudadServicio,
              private paisServicio: SeleccionServicio,
              private dialogoServicio: MatDialog) {

  }

  ngOnInit() {
    this.listar();
    this.listarPaises();
  }

  public listar() {
    this.ciudadServicio.listar().subscribe({
        next: respuesta => {
          this.ciudades = respuesta;
        },
        error: error => {
          window.alert(error.mesagge);
        }
      }
    );
  }

  public listarPaises() {
    this.paisServicio.listar().subscribe(
      {
        next: response => {
          this.paises = response;
        },
        error: error => {
          window.alert(error.message);
        }
      }
    );
  }


  public escoger(event: any) {
    if (event.type == "click") {
      this.ciudadEscogida = event.row;
      this.indiceCiudadEscogida = this.ciudades.findIndex(ciudad => ciudad == this.ciudadEscogida);
    }
  }

  public buscar() {
    if (this.textoBusqueda.length == 0) {
      this.listar();
    } else {
      this.ciudadServicio.buscar(this.indiceBusqueda, this.textoBusqueda).subscribe({
          next: respuesta => {
            this.ciudades = respuesta;
          },
          error: error => {
            window.alert(error.mesagge);
          }
        }
      );
    }
  }

  public agregar() {
    const dialogoAgregar = this.dialogoServicio.open(CiudadEditarComponente, {
        width: '500px',
        height: '300px',
        data: {
          encabezado: "Agregando nueva ciudad",
          ciudad: {
            id: 0, nombre: "", pais: {
              id: 0, nombre: "", entidad: ""
            }
          },
          paises: this.paises
        },
        disableClose: true
      }
    );
    dialogoAgregar.afterClosed().subscribe({
      next: datos => {
        if (datos) {
          this.ciudadServicio.agregar(datos.ciudad).subscribe({
            next: respuesta => {
              this.ciudadServicio.buscar(1, respuesta.nombre).subscribe({
                  next: respuesta => {
                    this.ciudades = respuesta;
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
    if (this.ciudadEscogida) {
      const dialogoModificar = this.dialogoServicio.open(CiudadEditarComponente, {
          width: '500px',
          height: '300px',
          data: {
            encabezado: `Editando la ciudad [${this.ciudadEscogida.nombre}]`,
            ciudad: {...this.ciudadEscogida},
            paises: this.paises
          },
          disableClose: true
        }
      );
      dialogoModificar.afterClosed().subscribe({
        next: datos => {
          if (datos) {
            datos.ciudad.idPais = datos.ciudad.pais.id;
            this.ciudadServicio.modificar(datos.ciudad).subscribe({
              next: respuesta => {
                this.ciudades[this.indiceCiudadEscogida] = respuesta;
              },
              error: error => {
                window.alert(error.message());
              }
            });
          }
        }
      })
    } else {
      window.alert("Debe escoger una Ciudad");
    }
  }

  public eliminar() {
    if (this.ciudadEscogida) {
      const dialogoEliminar = this.dialogoServicio.open(DecidirComponente, {
          width: '400px',
          height: '200px',
          data: {
            encabezado: `Está seguro de eliminar la ciudad [${this.ciudadEscogida.nombre}] ?`,
            id: this.ciudadEscogida.id
          },
          disableClose: true
        }
      );
      dialogoEliminar.afterClosed().subscribe({
        next: datos => {
          if (datos) {
            this.ciudadServicio.eliminar(datos.id).subscribe({
              next: respuesta => {
                this.listar();
              },
              error: error => {
                if (error.status == 404) {
                  window.alert("No se puede eliminar la Ciudad");
                }
              }
            });
          }
        }
      })
    } else {
      window.alert("Debe escoger una Ciudad");
    }
  }
}
