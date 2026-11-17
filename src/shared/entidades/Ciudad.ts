import {Seleccion} from './Seleccion';

export interface Ciudad {
  id: number;
  nombre: string;
  pais: Seleccion;
  idPais: number;
}
