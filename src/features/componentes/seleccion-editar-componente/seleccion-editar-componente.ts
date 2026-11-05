import {Component, Inject} from '@angular/core';
import {Seleccion} from '../../../shared/entidades/Seleccion';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {ReferenciasMaterialModule} from '../../../shared/modulos/referencias-material.module';

export interface DatosEdicionSeleccion {
  encabezado: string;
  seleccion: Seleccion;
}

@Component({
  selector: 'app-seleccion-editar-componente',
  imports: [
    ReferenciasMaterialModule,
    FormsModule,
  ],
  templateUrl: './seleccion-editar-componente.html',
  styleUrl: './seleccion-editar-componente.css',
})
export class SeleccionEditarComponente {
  constructor(@Inject(MAT_DIALOG_DATA) public datos: DatosEdicionSeleccion,
              public dialogRef: MatDialogRef<SeleccionEditarComponente>,
  ) {

  }
}
