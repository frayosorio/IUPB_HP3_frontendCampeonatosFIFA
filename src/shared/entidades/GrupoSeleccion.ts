import {Grupo} from "./Grupo";
import {Seleccion} from './Seleccion';

export interface GrupoSeleccion {
  grupo: Grupo;
  idGrupo: number;
  seleccion: Seleccion;
  idSeleccion: number;
}
