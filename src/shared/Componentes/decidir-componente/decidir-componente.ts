import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReferenciasMaterialModule} from '../../modulos/referencias-material.module';

export interface DatosDecision {
  encabezado: string;
  id: number;
}

@Component({
  selector: 'app-decidir-componente',
  imports: [
    ReferenciasMaterialModule
  ],
  templateUrl: './decidir-componente.html',
  styleUrl: './decidir-componente.css',
})
export class DecidirComponente {
  constructor(@Inject(MAT_DIALOG_DATA) public datos: DatosDecision,
              public dialogRef: MatDialogRef<DecidirComponente>,
  ) {

  }
}
