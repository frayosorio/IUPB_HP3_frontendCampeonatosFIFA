import {Campeonato} from "./Campeonato";
import {Estadio} from "./Estadio";
import {Fase} from "./Fase";
import {Seleccion} from './Seleccion';

export interface Encuentro {
  id: number;
  campeonato: Campeonato;
  idCampeonato: number;
  fase: Fase;
  idFase: number;
  seleccion1: Seleccion;
  idSeleccion1: number;
  goles1: number;
  penales1: number;
  seleccion2: Seleccion;
  idSeleccion2: number;
  goles2: number;
  penales2: number;
  estadio: Estadio;
  idEstadio: number;
  fecha: Date;
}
