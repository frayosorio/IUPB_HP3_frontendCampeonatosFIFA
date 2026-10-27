import {Campeonato} from "./Campeonato";
import {Estadio} from "./Estadio";
import {Fase} from "./Fase";
import {Seleccion} from './Seleccion';

export interface Encuentro {
  id: number;
  campeonato: Campeonato;
  fase: Fase;
  seleccion1: Seleccion;
  goles1: number;
  penales1: number;
  seleccion2: Seleccion;
  goles2: number;
  penales2: number;
  estadio: Estadio;
  fecha: Date;
}
